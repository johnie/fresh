import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  server: {
    port: 3001,
  },
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    include: ["./test/**/*.test.{ts,tsx}"],
    setupFiles: ["./test/setup.ts"],
  },
  plugins: [
    tailwindcss(),
    ...(process.env.VITEST
      ? []
      : [cloudflare({ viteEnvironment: { name: "ssr" } })]),
    tanstackStart(),
    viteReact(),
  ],
});
