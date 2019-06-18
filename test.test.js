const test1 = require("./index");

test("map through the array and add + 3 to each item", () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const expected = [4, 5, 6, 7, 8, 9];
  const actual = test1.esSixFunction(arr);
  expect(actual).toEqual(expected);
});

test("using es6 syntax add a and b strings", () => {
  const a = ["Hello"];
  const b = ["There"];
  const expected = "Hello There";
  const actual = test1.esSixConcat(a, b);
  expect(actual).toEqual(expected);
});

test("use es6 loop to display the array", () => {
  const arr = [1, 2, 3];
  const expected = [1, 2, 3];
  const actual = test1.arrayIteration(arr);
  expect(actual).toEqual(expected);
});
