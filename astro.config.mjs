// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://abhijha.in",
	integrations: [icon(), sitemap()],
	image: {
		domains: ["cdn3.emoji.gg"],
	},
});
