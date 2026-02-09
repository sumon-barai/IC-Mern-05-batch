# assets

- Hoisting means pulling something up, but it is not true
- JavaScript **Hoisting** refers to the process whereby the interpreter appears to move the *declaration* of **functions**, **variables**, **classes**, or **imports** to the top of their [scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope), prior to execution of the code.
- ***Hoisting* is not a term normatively defined in the ECMAScript specification.**
- In JavaScript, hoisting is a behavior in which a function or a variable can be used before declaration.

```jsx
console.log(demo);
test();
console.log(ab);
var demo = "this is demo variable";
function test() {
  console.log("this is test fn");
}

class Aerson {
  sumon = "sumon barai";
}

import ab from "./demo.js";
```

- In the original specification, there is no term for Hoisting. Before understanding hoisting, you have to understand how js engine works.
- JS code executes 2 phases
    - memory allocation phase or memory creation phase
    - code execution phase
- **memory allocation phase or memory creation phase:**
    - All the variables and functions are added to their relevant scope(create memory with a name in RAM)
    - Variables defined with var are initialized with undefined
    - functions hole body is added to their scope
- **code execution phase:**
    - js engine executes the code
    - In the execution phase js engine needs the scope, initial values, function body or declaration
- **How JavaScript code executes ( see the browser dev tools)**
    - 1 . Syntax checking starts
    - 2 . **Execution Context starts**
- variable var hoisting
    
    ```jsx
    console.log('name is:', person);
    var person;
    
    person = 'sumon';
    console.log('name is', person);
    
    ```
    
- **Temporal Dead Zone (**TDZ**): W**hen a variable is created but not initialized ( not usable at this moment ), its situation is called Temporal Dead Zone.
- **Temporal Dead Zone:**
    
    ```jsx
    console.log("name is:", names);
    let names;
    console.log("hel");
    
    names = "sumon barai";
    
    ==============================
    
    console.log("name is:", names);
    const names;
    console.log("hel");
    
    ```
    
- When I create a scope using {} brackets, then this is a completely new scope. and TDZ is started. But there is no execution context created
- Regular function hoisting
    
    ```jsx
    demo()
    
    function demo() {
      console.log("this is demo function");
    }
    
    ```
    
- variable let and const and var keyword and class, import keyword, hoisting
    - Variables var are hoisted and **initialized with an undefined value**
    - Variables let are hoisted but not initialized
    - Variables const are hoisted but not initialized
    - Classes are hoisted but not initialized
    - import keywords are hoisted and executed
- class hoising
    
    ```jsx
    console.log(demo);
    test();
    console.log(ab);
    var demo = "this is demo variable";
    function test() {
      console.log("this is test fn");
    }
    
    class APerson {
      sumon = "sumon barai";
    }
    
    import ab from "./demo.js";
    ```
    
- import hoisting
    
    ```jsx
    console.log(demo);
    test();
    console.log(ab);
    var demo = "this is demo variable";
    function test() {
      console.log("this is test fn");
    }
    
    class Aerson {
      sumon = "sumon barai";
    }
    
    import ab from "./demo.js";
    ```
    
- **variable and function name are the same**
    - function is first priority then variable
    
    ```jsx
    console.log(test);
    
    function test() {
      console.log("this is test fn");
    }
    var test = "hello";
    ```