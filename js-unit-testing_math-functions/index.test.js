import { add, subtract } from "./index.js";

test("returns 5 if called with add(2, 3)", () => {
  const result = add(2, 3);
  expect(result).toBe(5);
});
test("returns a negative value if the greater argument is negative", () => {
  const result = add(1, -4);
  expect(result).toBeLessThan(0);
});
test("returns a value close to 0.3 if called with add(0.1, 0.2)", () => {
  const result = add(0.1, 0.2);
  expect(result).toBeCloseTo(0.3);
});

test("returns 10 if called with subtract(15, 5)", () => {
  const result = subtract(15, 5);
  expect(result).toBe(10);
});

test("returns a negative value if the second argument is greater than the first one", () => {
  const result = subtract(2, 5);
  expect(result).toBeLessThan(0);
});
