// bs2-website Worker: serves the static site, and handles email for events@ and bills@bs2.ca.
// Cloudflare Email Routing sends those two addresses here (Email > Email Routing > Routing rules).
// Each email is forwarded to Ben's inbox as usual, then handed to the Supabase "email-intake"
// function, which adds it to the Events or Bills database in Notion.
// Secrets (Worker > Settings > Variables and Secrets): FORWARD_TO, INTAKE_TOKEN.

const INTAKE_URL = "https://wwznpjdpbewyhswotuht.supabase.co/functions/v1/email-intake";
const MAX_BYTES = 15 * 1024 * 1024;

function toBase64(buf) {
  const bytes = new Uint8Array(buf);
  let s = "";
  for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
  return btoa(s);
}

export default {
  // The site itself: every page is a static file.
  fetch(request, env) {
    return env.ASSETS.fetch(request);
  },

  async email(message, env, ctx) {
    const raw = await new Response(message.raw).arrayBuffer();
    if (env.FORWARD_TO) await message.forward(env.FORWARD_TO);
    if (!env.INTAKE_TOKEN || raw.byteLength > MAX_BYTES) return;
    ctx.waitUntil(
      fetch(INTAKE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-intake-token": env.INTAKE_TOKEN },
        body: JSON.stringify({ to: message.to, from: message.from, raw: toBase64(raw) }),
      }).then(async (r) => { if (!r.ok) console.log("email-intake", r.status, await r.text()); })
        .catch((e) => console.log("email-intake failed", String(e)))
    );
  },
};
