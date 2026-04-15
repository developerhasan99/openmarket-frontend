import { defineConfig } from "vite";

export default defineConfig({
  base: "/openmarket-frontend/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "assets/[name][extname]",
      },
    },
  },
});
