import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  adapter: cloudflare(),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: { en: "en", ja: "ja" },
      },
    }),
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    routing: { prefixDefaultLocale: false },
  },
  build: { inlineStylesheets: "always" },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: "esbuild",
    },
  },
  site: "https://zeed.run",
});
