const upperCase = require("upper-case").upperCase;

function greet(name) {
  console.log(upperCase(`Hello ${name}, welcome to Codevolution!`));
}

// greet("Albin");
module.exports = greet;
