const test1 = require("./index");

test("map through the array and add + 3 to each item", function() {
  const arr = [1, 2, 3, 4, 5, 6];
  const expected = [4, 5, 6, 7, 8, 9];
  const actual = test1.esSixFunction(arr);
  expect(actual).toEqual(expected);
});

test("using es6 syntax add a and b strings", function() {
  const a = ["Hello"];
  const b = ["There"];
  const expected = "Hello There";
  const actual = test1.esSixConcat(a, b);
  expect(actual).toEqual(expected);
});
