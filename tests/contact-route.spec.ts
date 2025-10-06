import { describe, it, expect } from "vitest";
import { ZodError } from "zod";
import { Contact } from "../app/api/contact/route";

const base = {
    fullName: "Test User",
    email: "t@e.co",
    company: "X",
    phone: "123",
    service: "web",
    budget: "5k-10k",
    timeline: "<1m",
    details: "This is a longer message with more than 10 characters",
    contactType: "email",
    website: "" // honeypot empty
};

describe("contact schema", () => {
    it("accepts valid payload", () => {
        expect(Contact.parse(base)).toBeTruthy();
    });

    it("accepts honeypot field (validation happens in route handler)", () => {
        const result = Contact.parse({ ...base, website: "http://spam" });
        expect(result.website).toBe("http://spam");
    });

    it("requires required fields", () => {
        expect(() => Contact.parse({ email: "test@example.com" })).toThrow(ZodError);
    });
});