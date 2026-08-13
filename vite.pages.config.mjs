import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Static build for GitHub Pages.
// The main vinext build (vite.config.ts) is unchanged; this config produces a
// plain static site under dist-pages/ that Pages can host directly.
export default defineConfig({
  root: "pages",
  base: "./",
  plugins: [react()],
  publicDir: "../public",
  build: {
    outDir: "../dist-pages",
    emptyOutDir: true,
  },
});
