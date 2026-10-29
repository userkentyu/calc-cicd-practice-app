// 加算・減算・乗算・除算を行う関数
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('0で割ることはできません');
  }
  return a / b;
}

function power(base, exponent) {
  return base ** exponent;
}

module.exports = { add, subtract, multiply, divide, power };