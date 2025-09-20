# Day-08 Javascript By sumon barai

## Functions

## What is a function

- **In JavaScript,** A **function** is just a **set of instructions or a reusable block of code** that you can reuse.
- You write it once, and use (or **call**) it whenever you need.
- **In JavaScript,** A **function** is like a small machine—you give it some input, it processes it, and it can return an output.
- Function call or invoke means to tell the engine, please do this work

## Defining a Function

<details>
<summary>Defining a Function</summary>

```javaScript
//function definition, function declaration or function body
function functionName(parameters) {
  // code to be executed
  return result; // optional
}

// call or Invoke a function
 functionName()


 function greet() {
  console.log("Hello, World!");
}

greet();
```

</details>

## Function as an Expression

- Function Expression: When a function definition is stored inside a variable, it’s called a Function expression

<details>
<summary>Function as an Expression</summary>

```javaScript
const myFunction = function() {
  console.log("This is a function expression");
};

myFunction();
```

</details>

## Parameters and Arguments

- Why use parameters and arguments ? for Dynamic work
- Parameters

  - Parameters are like **placeholders (variables)** inside the function.
  - They **receive the input** when the function is called.
  - A parameter that has no value passed as an argument is automatically assigned **an undefined value**

  <details>
  <summary>example</summary>

  ```javaScript
  function greet(name) {   // 'name' is a parameter
    console.log("Hello " + name);
  }
  ```

  </details>

- Arguments

  - Arguments are the **actual values** you pass into the function when you **call** it.
  - They replace the parameters during execution.

  <details>
  <summary>example</summary>

  ```javaScript
  greet("Suman"); // "Suman" is the argument

  ```

  </details>

## Function return statement

- Function return means প্রতিদান or outcome
- A function can **give back (return) a result** after finishing its work.
- This is done using the **`return`** keyword.
- If you don’t use `return`The function gives back `undefined` by default.
- After the return statement, no code is executed by the JS engine

  <details>
  <summary>example</summary>

  ```javaScript

  function add(a, b) {   // 'a' and 'b' are parameters
    const result = a + b;
    return result;
  }

  const ans = add(5,3)  // 5 and 3 are arguments
  console.log(ans);

  ```

  </details>

## Default and Rest Parameters

- Default Parameters

  - Default parameters give a default value to a function parameter.
  - If no argument is provided, the default value will be used.

    ```jsx
    function greet(name = "Guest") {
      console.log("Hello " + name);
    }

    greet(); // Hello Guest  (no argument → uses default)
    greet("Suman"); // Hello Suman  (argument given → overrides default)
    ```

- Rest Parameters

  - Rest parameters let you pass **many arguments** into a function.
  - They are written with **`...` (three dots)**.
  - Inside the function, they become an **array**.

    ```jsx
    function sum(num1, ...numbers) {
      congole.log(numbers);
    }

    sum(1, 2, 3);
    sum(4, 5, 6, 7, 8);
    ```

## Nested Function

- Nested Function: When a function **is inside another function, it's called a nested function**

  ```jsx
  function outer() {
    console.log("This is the outer function");

    function inner() {
      console.log("This is the inner (nested) function");
    }

    inner(); // call inner function
  }

  outer();
  ```

## Callback Function

- Callback Function: When you **pass a function as an argument to another function, it's called a** Callback Function.
- Anonymous function: An **anonymous function** is a function **without a name**.

  ```jsx
  function greet(name, callback) {
    console.log("Hello " + name);
    callback(); // calling the function passed in
  }

  function sayBye() {
    console.log("Goodbye!");
  }

  greet("Suman", sayBye);
  //or
  greet("Suman", function () {
    // Anonymous function:
    console.log("Goodbye!");
  });
  ```

## Pure Function

- Pure Function: A **pure function** is a function that a**lways returns the same output** for the same input and d**oes not change anything outside** the function (no side effects).

  ```jsx
  // Example 1: Pure Function

  function add(a, b) {
    return a + b;
  }

  console.log(add(2, 3)); // 5
  console.log(add(2, 3)); // 5

  // Example 2: Not a Pure Function // Impure function
  let x = 10;

  function addToX(y) {
    x = x + y; // modifies outside variable
    return x;
  }

  console.log(addToX(5)); // 15
  console.log(addToX(5)); // 20 ❌ output changes
  ```

## Higher Order Function

- Higher Order Function: A **Higher-Order Function** is a function that t**akes one or more functions as arguments**, or r**eturns a function** as its result.

  ```js
  //Example 1: Function as an argument

  function greet(name, callback) {
    console.log("Hello " + name);
    callback();
  }

  function sayBye() {
    console.log("Goodbye!");
  }

  greet("Suman", sayBye);
  ```

- `greet` is a **higher-order function** because it **receives a function (`sayBye`) as an argument**.

  ```js
  // Example 2: Function that returns another function

  function multiplier(factor) {
    return function (number) {
      return number * factor;
    };
  }

  const double = multiplier(2); // double is now a function
  console.log(double(5)); // 10
  ```

- `multiplier` is a **higher-order function** because it **returns another function**.

## Arrow Function

```jsx
// Regular / normal function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => {
  return a + b;
};
```

```jsx
// Example 1: Simple Arrow Function
const greet = () => {
  console.log("Hello World!");
};

greet(); // Hello World!

//Example 2: With Parameters
const square = (n) => n * n;

console.log(square(4)); // 16

// only one parameter
const double = (x) => x * 2;

console.log(double(5)); // 10

//No Parameters
const sayHi = () => "Hi there!";
console.log(sayHi()); // Hi there!
```

## IFFE Function

- IIFE (Immediately Invoked Function Expression)
- **IIFE** is a function in JavaScript that runs **immediately after it is defined**.

  ```jsx
  // syntax
  (function () {
    console.log("I am an IIFE!");
  })();

  // Example 1: With parameters

  (function (name) {
    console.log("Hello " + name);
  })("Suman");
  ```

## Another type of Function

- constructor function
- factory function
- Recursive Function
- Generator Function
- Async Function
- so more…
