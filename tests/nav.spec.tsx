import { describe, it, expect, vi } from "vitest";
import { render } from "@testing-library/react";
import React from "react";
import { Nav } from "../components/nav";

// Mock window.location
Object.defineProperty(window, "location", {
    value: {
        host: "localhost:3000",
    },
    writable: true,
});

describe("Nav", () => {
    it("renders stable snapshot", () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });
});