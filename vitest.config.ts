import viteConfig from "./vite.config";
import { fileURLToPath } from "node:url";
import { mergeConfig } from "vite";
import { configDefaults, defineConfig } from "vitest/config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude],
      root: fileURLToPath(new URL("./src/test/webapp/spec", import.meta.url)),
    },
  })
);
