import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./src/main/webapp",
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src/main/webapp/src", import.meta.url)),
    },
  },
});
