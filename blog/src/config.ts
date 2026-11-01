// Site-wide settings. Change the blog's identity here.
export const site = {
  // TODO: pick the real blog name
  title: "Engineering Notes",
  titleAr: "هندسة ونوت",
  description:
    "Practical engineering for practitioners — clear takes, real examples, no filler.",
  descriptionAr:
    "محتوى هندسي للمهندسين الشغالين — شرح واضح، أمثلة كتير، ومن غير أي حشو.",
  // Cloudflare Pages project name used by `wrangler pages deploy`
  cloudflareProject: "engineering-notes",
} as const;
