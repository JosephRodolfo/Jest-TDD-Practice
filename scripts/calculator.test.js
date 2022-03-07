const calculator = require("./calculator");

test("adds two values and returns sum", () => {
  expect(calculator.add(1, 1)).toBe(2);
});

test("subtracts one value from another and returns result", () => {
  expect(calculator.subtract(4, 2)).toBe(2);
});

test("multiplies two values and returns result", () => {
  expect(calculator.multiply(4, 2)).toBe(8);
});
test("divides one number by another and returns result", () => {
  expect(calculator.divide(8, 2)).toBe(4);
});
