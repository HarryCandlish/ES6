module.exports = {
  esSixFunction,
  esSixConcat
};

// Arrow functions ( => )

function esSixFunction(arr) {
  x = arr.map(n => n + 3);
  return x;
}

// Concatenation/String Interpolation

function esSixConcat(a, b) {
  return `${a} ${b}`;
}
