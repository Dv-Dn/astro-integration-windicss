import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { dependencies } from "./package.json";

export default defineConfig({
  plugins: [dts({ insertTypesEntry: true })],
  build: {
    sourcemap: true,
    lib: {
      name: "astro-plugin-windicss",
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["cjs", "es"],
      fileName: `index`,
    },
    rollupOptions: {
      external: [...Object.keys(dependencies), "url", "path", "module"],
    },
    target: "esnext",
  },
});
