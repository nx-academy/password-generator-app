import { describe, it, expect } from "vitest";

import { generatePassword } from "./generatePassword";

describe("generatePassword Unit Test Suites", () => {
    it("should be return something", () => {
        expect(generatePassword(3, true, true, false, false)).toBeDefined();
    });

    it("should be return a string", () => {
        expect(typeof generatePassword(3, true, true, false, false)).toBe(
            "string"
        );
    });

    it("should be return a string with 5 characters", () => {
        expect(generatePassword(5, true, true, false, false).length).toEqual(5);
    });

    it("should be return a string only in lowercase", () => {
        const password = generatePassword(10, false, true, false, false);
        const re = /^[a-z]+$/;

        expect(re.test(password)).toBe(true);
    });

    it("should be return a string without lowercase", () => {
        const password = generatePassword(10, true, false, true, false);
        const re = /^[A-Z0-9]+$/;

        expect(re.test(password)).toBe(true);
    });

    it("should be return a string with lowercase and uppercase", () => {
        const password = generatePassword(10, true, true, false, false);
        const re = /^[a-zA-Z]+$/;

        expect(re.test(password)).toBe(true);
    });

    it("should be return a string with lowercase, uppercase and numbers", () => {
        const password = generatePassword(10, false, true, true, false);
        const re = /^[a-zA-Z0-9]+$/;

        expect(re.test(password)).toBe(true);
    });

    it("should be return a string with lowercase, uppercase, numbers and symbols", () => {
        const password = generatePassword(10, true, true, true, true);
        const re = /^[a-zA-Z0-9#?!@$.*[?%^&*-\]]+$/;

        expect(re.test(password)).toBe(true);
    });
});
