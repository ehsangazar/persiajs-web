// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// Production: https://persiajs.dev/ (no base path).
// A test deploy (e.g. GitHub Pages project URL) sets these two variables
// in .github/workflows/deploy.yml.
const site = process.env.SITE_URL || "https://persiajs.dev";
const base = process.env.BASE_PATH || "/";
// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [react(), sitemap()],

  markdown: {
    shikiConfig: { theme: "github-dark" },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
