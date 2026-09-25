import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import svelte from "@astrojs/svelte";

// astro.config runs before import.meta.env exists, so read .env by hand.
const { SITE_URL } = loadEnv(process.env.NODE_ENV ?? "production", process.cwd(), "");

export default defineConfig({
  // canonical/og tags follow SITE_URL; the fallback is the proposed domain.
  site: SITE_URL || "https://comerzia.mx",
  integrations: [svelte()],
  build: { inlineStylesheets: "auto" },
});
