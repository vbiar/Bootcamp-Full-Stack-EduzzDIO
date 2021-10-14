/* function sum (a, b) {
  return a + b;
};

console.log(sum(3, 5)); */

// Arrow functions

// Apenas quando é uma expressão objetivo (return implicito)

var sum = (a, b) => a + b

// Quando não for uma expressão, é necessário utilizar {}

var sum = (a, b) => {
  return a + b;           
}

console.log(sum(5, 15))

/* var obj = {
  showContext: function showContext() {
    
    setTimeout (() => {
      this.log('after 1000ms');
    }, 1000);
  },
  log: function log(value) {
    console.log(value);
  }
};
obj.showContext(); */
