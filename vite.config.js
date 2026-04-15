import { defineConfig } from "vite";

export default defineConfig({
  base: "/openmarket-frontend/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/index.css",
        entryFileNames: "assets/index.js",
      },
    },
  },
});
