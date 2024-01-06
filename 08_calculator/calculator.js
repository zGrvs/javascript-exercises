const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  return array.reduce((total, num) => {
    return num + total;
  }, 0)
};

const multiply = function(array) {
  return array.reduce((total, num) => {
    return num * total;
  }, 1)
};

const power = function(a, b) {
  let total = a;
	for (let i = 0; i < b - 1; i++) {
    total *= a;
  }
  return total;
};

const factorial = function(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
