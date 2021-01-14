import { sum } from "..";

describe("should calculate a sum properly", () => {
    test("two positive numbers", () => {
       expect(sum(2, 3)).toBe(5);
    });

    test("two negative numbers", () => {
        expect(sum(-2, -3)).toBe(-5);
    });

    test("one positive one negative number", () => {
        expect(sum(10, -5)).toBe(5);
    });
});
