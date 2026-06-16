import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    environment: "jsdom",
    include: ["./test/**/*.test.{ts,tsx}"],
    setupFiles: ["./test/setup.ts"],
  },
  plugins: [tailwindcss(), tanstackStart(), viteReact()],
});
