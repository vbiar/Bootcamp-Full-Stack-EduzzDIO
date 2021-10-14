const xau = 'Oi, tudo bem';

function quebraArgs(...args) {
  console.log(...args);
}
quebraArgs(...xau);

// array

const arr = [1, 2, 3, 4]

function quebraArgs() {
  console.log(arguments);
}
quebraArgs(...arr);

// combinando arrays
const arr2 = [...arr, 5, 6, 7];

const arr3 = [...arr, ...arr2, 8, 9, 10]

console.log(arr3)