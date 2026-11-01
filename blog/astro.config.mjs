import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// TODO: after the first Cloudflare Pages deploy, set BLOG_SITE_URL (or edit the
// fallback below) to the real *.pages.dev / custom domain. Canonical URLs, the
// sitemap, and hreflang alternates all derive from it.
export default defineConfig({
  site: process.env.BLOG_SITE_URL || "https://blog.example.com",
  integrations: [sitemap()],
});
