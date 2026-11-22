// BS2 services catalog: what each tool is for, in plain words, and where to sign up.
// Used by the quote builder (to pick tools) and the client's quote page (their start-up guide).
window.BS2_SERVICES = {
  domain: { name: "Domain name", purpose: "Your web address, like yourbusiness.ca. It's also what your business email is built on.", url: "https://www.rebel.ca/", signup: "Search and buy at Rebel.ca", tip: "Buy it in your own name. Skip the add-ons (email, hosting, site builder); we set those up separately." },
  cloudflare: { name: "Cloudflare", purpose: "Points your domain to your website and email, and protects the site from attacks and spam. Free.", url: "https://dash.cloudflare.com/sign-up", signup: "Create a free account" },
  github: { name: "GitHub", purpose: "Where your website's code lives, in your name, so you own it. It can also host simple sites for free.", url: "https://github.com/signup", signup: "Create a free account" },
  vercel: { name: "Vercel", purpose: "Runs your website so it loads fast everywhere. A business site needs the Pro plan.", url: "https://vercel.com/signup", signup: "Sign up (use your GitHub account)" },
  supabase: { name: "Supabase", purpose: "Your database and customer logins: where forms, bookings, quotes and records are stored.", url: "https://supabase.com/dashboard/sign-up", signup: "Sign up (use your GitHub account)" },
  stripe: { name: "Stripe", purpose: "Takes card and bank-debit payments from your customers and deposits them in your bank. No monthly fee, just a small fee per payment.", url: "https://dashboard.stripe.com/register", signup: "Create your account", tip: "Have your business name, address and bank details ready. Stripe will ask to verify your ID." },
  improvmx: { name: "ImprovMX", purpose: "Gives you a you@yourbusiness.ca email address that forwards to the inbox you already use. Free.", url: "https://improvmx.com/", signup: "Sign up free" },
  resend: { name: "Resend", purpose: "Sends emails from your website, like quotes, booking confirmations and receipts, from your own domain. Free for up to 3,000 emails a month.", url: "https://resend.com/signup", signup: "Create a free account" },
  calendly: { name: "Calendly", purpose: "Lets customers book a time with you online, synced to your calendar, with reminders.", url: "https://calendly.com/signup", signup: "Sign up" },
  tally: { name: "Tally", purpose: "Simple online forms, like intake forms or surveys. Free.", url: "https://tally.so/signup", signup: "Sign up free" },
  anthropic: { name: "Claude API (Anthropic)", purpose: "The AI behind smart features, like reading call notes or drafting replies. Pay as you go; $5 of credit lasts a long time.", url: "https://console.anthropic.com/", signup: "Create an account and add $5 of credit", tip: "When it asks where your code runs, pick Somewhere else." },
  wave: { name: "Wave", purpose: "Invoicing and simple bookkeeping.", url: "https://www.waveapps.com/", signup: "Sign up" },
};
// Old quotes saved tools by name only; match them to the catalog.
window.BS2_SERVICE_ID = name => {
  const n = String(name || "").toLowerCase();
  return Object.keys(window.BS2_SERVICES).find(k => n.includes(k) || n.includes(window.BS2_SERVICES[k].name.toLowerCase().split(" ")[0])) || null;
};
