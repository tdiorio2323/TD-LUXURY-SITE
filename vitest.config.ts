import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
    test: {
        environment: "jsdom",
        setupFiles: ["./tests/setup.ts"],
        include: ["tests/**/*.spec.ts?(x)"],
        exclude: ["**/mobile-layout.spec.ts", "**/playwright/**"],
        passWithNoTests: false,
        globals: true,
    },
    resolve: {
        alias: {
            "@": resolve(__dirname, "."),
        },
    },
    esbuild: {
        jsx: "automatic",
    },
});