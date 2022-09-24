import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  optimizeDeps: { exclude: ["svelte-navigator"] },
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "src/api"),
      "@views": path.resolve(__dirname, "src/views"),
      "@components": path.resolve(__dirname, "src/components")
    }
  }
});
