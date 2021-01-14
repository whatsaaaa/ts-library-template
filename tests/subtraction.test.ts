import { subtract } from "..";

describe("should calculate the difference properly", () => {
   test("two positive numbers", () => {
       expect(subtract(5, 3)).toBe(2);
   });

   test("two negative numbers", () => {
       expect(subtract(-1, -3)).toBe(2);
   });

   test("one positive, one negative number", () => {
       expect(subtract(1, -1)).toBe(2);
   });
});
