import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import compress from "astro-compress";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://astronvim.com",
  base: "/",
  trailingSlash: "never",
  output: "static",
  integrations: [
    tailwind(),
    sitemap(),
    icon({
      include: {
        tabler: ["*"],
      }
    }),
    compress({
      CSS: true,
      HTML: { removeAttributeQuotes: false },
      Image: false,
      JavaScript: true,
      SVG: true,
      Logger: 1,
    }),
  ]
});
