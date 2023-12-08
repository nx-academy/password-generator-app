import { describe, it, expect } from "vitest";

import { generatePassword } from "./generatePassword";

describe("generatePassword Unit Test Suites", () => {
    it("should be return something", () => {
        expect(generatePassword(3, true)).toBeDefined();
    });

    it("should be return a string", () => {
        expect(typeof generatePassword(3, true)).toBe("string");
    });

    it("should be return a string with 5 characters", () => {
        expect(generatePassword(5, true).length).toEqual(5);
    });

    it("should be return a string only in lowercase", () => {
        const password = generatePassword(10, false);
        const re = /^[a-z]+$/;

        expect(re.test(password)).toBe(true);
    });

    it("should be return a string with lowercase and uppercase", () => {
        const password = generatePassword(10, true);
        const re = /^[a-zA-Z]+$/;

        expect(re.test(password)).toBe(true);
    });
});
