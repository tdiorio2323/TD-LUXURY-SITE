import { expect, vi } from "vitest";
import * as matchers from "@testing-library/jest-dom/matchers";
import * as React from "react";

// Make React globally available
(global as any).React = React;

expect.extend(matchers);

// Mock Next.js router
vi.mock("next/navigation", () => ({
    usePathname: () => "/",
    useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        prefetch: vi.fn(),
    }),
}));

// Mock next/link
vi.mock("next/link", () => {
    return {
        default: ({ children, href, ...props }: any) => {
            return React.createElement("a", { href, ...props }, children);
        },
    };
});

// Mock next/image
vi.mock("next/image", () => {
    return {
        default: (props: any) => {
            return React.createElement("img", props);
        },
    };
});