// lazy evaluation

function randomNumber() {
  console.log('Generating random number...')
  return Math.random().toFixed(1) * 10;
}

function multiply(a, b = randomNumber()) {
  return a * b;
}

console.log(multiply(3));
