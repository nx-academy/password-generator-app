import { describe, it, expect } from "vitest";

import { scoringStrength } from "./scoringStrength";

describe("scoringStrength Unit Test Suites", () => {
    it("should be return something", () => {
        expect(scoringStrength("P4$5W0rD!")).toBeDefined();
    });

    it("should be return a number", () => {
        expect(typeof scoringStrength("P4$5W0rD!")).toBe("number");
    });

    it("should be return a score for tooweak's case", () => {
        expect(scoringStrength("lxsiuad")).toBe(1);
        expect(scoringStrength("SLUUBDNJVC")).toBe(1);
        expect(scoringStrength("4518541922")).toBe(1);
        expect(scoringStrength("?*$$#?%^!?")).toBe(1);
    });

    it("should be return a score for weak's case", () => {
        expect(scoringStrength("up1r1ou")).toBe(2);
        expect(scoringStrength("sGMDFhnlaZ")).toBe(2);
        expect(scoringStrength("awz3p1h9ws")).toBe(2);
        expect(scoringStrength("&@q*n?*u%e")).toBe(2);
    });

    it("should be return a score for medium's case", () => {
        expect(scoringStrength("PseR4tC")).toBe(3);
        expect(scoringStrength("KuO$*OE!IN")).toBe(3);
        expect(scoringStrength("w1qr%b$bu#$")).toBe(3);
        expect(scoringStrength("QBtNbzIvA2")).toBe(3);
    });

    it("should be return a score for strong's case", () => {
        expect(scoringStrength("Lg4%]LJQ^")).toBe(4);
        expect(scoringStrength("IZVk1!?3OB")).toBe(4);
        expect(scoringStrength("uzSB.E%GF8")).toBe(4);
        expect(scoringStrength("A#o6a7.rhy")).toBe(4);
    });
});
