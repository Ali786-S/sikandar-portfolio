export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");
export const email = "alissikandar7788@gmail.com";
export const github = "https://github.com/Ali786-S";
export const linkedin = "https://www.linkedin.com/in/sikandar-ali-767063218/";
