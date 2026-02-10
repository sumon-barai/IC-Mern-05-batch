# assets

- **Scope:** Scope means where you can use (access) a variable in your code.
- In JavaScript, scope refers to the current context of your code  area, where variables, functions, and objects are accessible or visible
- Five Types of Scope in JavaScript:
    - Global Scope
    - Function or Local Scope
    - Block Scope
    - Script Scope
    - Module Scope
    
    - **Global Scope**
        - When you declare or create Variables **outside of any function or block**, it's in the global scope.
        - We can be accessed **from anywhere** in the program.
        
        ```jsx
        let name = "Suman"; // Global variable
        
        function greet() { // Global function
          console.log("Hello " + name); // Accessible here
        }
        
        greet(); // Hello Suman
        console.log(name); // Accessible here too
        
        ```
        
        - Global variables and functions are created in the window object (Global object )
        
    - **Function or Local Scope**
        - When you declare Variables or ~~inner function~~ **inside a function** are only available **inside that function**.
        - You **cannot access  outside of that function**
        
        ```jsx
        function greet() {
          let message = "Hi!";
          console.log(message); // Works fine
        }
        
        greet();
        console.log(message); // ❌ Error: message is not defined
        
        ```
        
        - 
    - **Block Scope (introduced in ES6)**
        - Variables declared with **`let`** or **`const`** inside `{ }` are **block-scoped**.
        - Not accessible **outside the block**.
        
        ```jsx
        {
          let x = 10;
          const y = 20;
          console.log(x, y); // Works inside the block
        }
        
        console.log(x, y); // ❌ Error: not defined
        
        ```
        
        - `var` is **not block-scoped;** it is **function-scoped**.
        - If you create Variables **`let`** or **`const`** Inside a function, then it is Function scope
    - **Lexical Scope or Static Scope**
        - **Lexical Scope:** A function can use variables from its outer (parent) function, even if the parent function has finished running. It’s called **“lexical”.**
        - Because the scope is decided by where functions are **written in the code**, not where they **are called.**
        
        ```jsx
        function outer() {
          let name = "Suman";  // variable in outer function
        
          function inner() {
            console.log("Hello " + name); // inner can use outer variable
          }
        
          inner();
        }
        
        outer();
        
        ```
        
        - h
        
    - Script Scope
    - Module Scope
- **Scope Chain**
    - The **Scope Chain** is the process to **find JavaScript variables and functions.** When you use a variable, JavaScript looks for it in the **current scope,** and if not found, it **moves up** to the **outer scopes** — step by step — until it reaches the **global scope**.
    
    ```jsx
    let name = "Suman"; // Global scope
    
    function outer() {
      let city = "Dhaka"; // Outer scope
    
      function inner() {
        let job = "Developer"; // Inner scope
        console.log(name); // from global
        console.log(city); // from outer
        console.log(job);  // from inner
      }
    
      inner();
    }
    
    outer();
    
    ```
    

- **variable shadowing**
    - **Variable Shadowing** happens when a **local variable** (inside a block or function) has the **same name** as a variable in an **outer scope**.
    - exmple-1
    
    ```jsx
    let name = "Suman"; // Outer (global) variable
    
    function greet() {
      let name = "Rahim"; // Inner (local) variable shadows the outer one
      console.log("Hello " + name);
    }
    
    greet();       // Output: Hello Rahim
    console.log(name); // Output: Suman
    
    ```
    
    - Block Example:
    
    ```jsx
    let city = "Dhaka";
    
    {
      let city = "Chittagong"; // shadows outer city
      console.log(city); // Chittagong
    }
    
    console.log(city); // Dhaka
    
    ```
    
    - With `var`:
    
    ```jsx
    var x = 10;
    
    {
      var x = 20; // same variable (not shadowing, actually re-declaring)
      console.log(x); // 20
    }
    
    console.log(x); // 20 😬
    
    ```
    
    - **Comparison Table: `var` vs `let` vs `const`**
        
        
        | **Feature** | **`var`** | **`let`** | **`const`** |
        | --- | --- | --- | --- |
        | **Scope** | Function scope | Block scope `{}` | Block scope `{}` |
        | **Hoisting** | Hoisted & initialized as `undefined` | Hoisted but in **Temporal Dead Zone (TDZ)** | Hoisted but in **Temporal Dead Zone (TDZ)** |
        | **Attached to `window`?** | ✅ Yes | ❌ No | ❌ No |
        | **Can be Re-declared?** | ✅ Yes | ❌ No | ❌ No |
        | **Can be Reassigned?** | ✅ Yes | ✅ Yes | ❌ No |
        | **Initial Value Required?** | ❌ No | ❌ No | ✅ Yes (Must be initialized) |
        | **Mutability** | Mutable | Mutable | Immutable (Can't be reassigned but mutable if it's an object or array) |
        | **Use in Loops** | Allowed but not recommended (function scope issues) | ✅ Recommended | ❌ Not recommended for changing values |
    - **Loop in var and let**
        
        ```jsx
        // var example
        for(var i =0;i<5;i++){
        console.log(i)
        }
        
        console.log(i) // 5
        
        // let example
        for(let i =0;i<5;i++){
        console.log(i)
        }
        
        console.log(i) // reference error i is not defined
        ```