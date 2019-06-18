module.exports = {
  esSixFunction,
  esSixConcat,
  arrayIteration
};

// Arrow functions ( => )

// var arr = [1, 2, 3, 4, 5];

function esSixFunction(arr) {
  x = arr.map(n => n + 3);
  return x;
}
//   returns [4, 5, 6, 7, 8, 9]

// Concatenation/String Interpolation

function esSixConcat(a, b) {
  return `${a} ${b}`;
}
//returns :   'Hello There'

// Array Iteration ES6

// var arr = [1, 2, 3];

function arrayIteration(arr) {
  for (let i of arr) console.log(i);
}
// returns 1
//         2
//         3
