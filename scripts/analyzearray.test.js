const analyzeArray = require("./analyzearray");

test("min value of object created by analyzeArray", () => {
  expect(analyzeArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).min).toEqual(0);
});

test("max value of object created by analyzeArray", () => {
  expect(analyzeArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).max).toEqual(10);
});

test("average value of object created by analyzeArray", () => {
  expect(analyzeArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).average).toEqual(5);
});

test("length of number of elements in array passed to analyzeArray, which is  a property of object returned", () => {
  expect(analyzeArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toEqual(11);
});

test("check that whole object is correct", () =>
  expect(analyzeArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual({
    average: 5,
    min: 0,
    max: 10,
    length: 11,
  }));
