import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/contact-*.spec.ts"],
    exclude: ["**/mobile-layout.spec.ts", "**/playwright/**"],
    passWithNoTests: false,
  },
});