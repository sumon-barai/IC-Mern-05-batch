/* // function definition  or function declaration
function doWork() {
  console.log("hello ");
  console.log("world ");
  console.log(10);
  console.log(true);
  console.log("===========");
}

// function call or function invoke
doWork();
console.log("our course");
doWork(); */

// regular function or normal function
/* function print() {
  console.log("hello world");
}

print(); */

// Function as an Expression

/* const test = function () {
  console.log("hello world");
};

test(); */

// Parameters and Arguments
/* 
function greet(name, age, bol) {
  console.log(name);
  console.log(age);
  console.log(bol);
  console.log("========");
}

greet("sumon", 36, true); // input
greet("reza vaiya", 60, false); // input
 */

/* function greet(name, age) {
  console.log(name);
  console.log(age);
}

greet("sumon"); */

// add function

/* function addNumber(num1, num2) {
  const result = num1 + num2;
  console.log("our class is not good");
  return result;
}

const res = addNumber(5, 6);
console.log(res); */

// Default and Rest Parameters

/* function greet(name = "guest", age, ...number) {
  console.log(number);
}

greet("sumon", 50, 60, 20, 30); */

// Nested Function

function outer() {
  console.log("This is the outer function");

  function inner() {
    console.log("This is the inner (nested) function");
  }
  return inner;
}

// const inner = outer();
// inner();

//  Callback Function

/* function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

greet("sumon", function () {
  console.log("Goodbye!");
}); */

// Pure Function

/* Pure Function: A pure function is a function that always returns the same output for the same input and does not change anything outside the function (no side effects). */

let result = 0;

function add(a, b) {
  result = result + a + b;
  return result;
}

console.log(add(5, 6));
console.log(add(5, 6));
console.log(add(5, 6));
console.log(add(5, 6));

(function math() {
  console.log("math");
})();
