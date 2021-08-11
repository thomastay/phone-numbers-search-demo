import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin()],
  base: "/phone-numbers-search-demo/",
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
    sourcemap: true,
  },
});
