# JavaScript Strict mode

- JavaScript is a friendly language. Some mistakes JavaScript automatically solves
- JavaScript Strict Mode: **Strict Mode** is a special mode in JavaScript that makes the language **stricter and safer**.

**It helps:**

- Catch common coding mistakes
- Prevent bad practices
- Write more secure and clean code

Strict Mode was introduced in **ES5**.

### Enabling Strict Mode

There are a few ways to explicitly tell JavaScript to use **strict mode**:

- **Class Definitions**: Everything inside a class is automatically in `StrictMode`.
- **The "use strict" Keyword**: This can be placed at the **top of a JS file**, or **inside any function**
- **Modules**: When importing a JS file using `type="module"`, everything inside the file (referred to as "Module Fill" in the source) will be under strict mode.

## Example

- **1. Variables must be declared or polluted  window object**
    
    ```jsx
    "use strict";
    a = 10;
    ```
    
- **2. Read-only properties cannot be modified**
    
    ```jsx
    "use strict";
    const obj = {};
    Object.defineProperty(obj, "x", {
      value: 10,
      writable: false,
    });
    
    obj.x = 20;
    
    console.log(obj.x);
    ```
    
- **3. Duplicate function parameters are not allowed**
    
    ```jsx
    "use strict";
    function sum(a, a) {
      console.log(a + a);
    }
    
    sum(10, 20);
    ```
    
- **4 . Auto Conversion to different number systems is not allowed**
    
    ```jsx
    "use strict";
    console.log(015);
    ```
    
    In strict mode, if we want conversion of number system then we have
    append following characters before number:
    
    - BinaryIntegerLiteral, prefixed with 0b or 0B.
    - OctalIntegerLiteral, prefixed with 0o or 0O.
    - HexIntegerLiteral, prefixed with 0x or 0X.
    
    `console.log(0o10); // for octal`
    
- **5 . Primitive values used as non-primitives**
    
    ```jsx
    "use strict";
    const test = "this is test string";
    test.age = 30;
    console.log(test.age);
    
    ```
    
- 6 . **Binds window scope in every regular function**
    
    ```jsx
    "use strict";
    function demo() {
      console.log(this);
    }
    
    demo();
    new demo()
    demo.call({name:"sumon"})
    ```
    
- **7 . overwrites the arguments array by default**
    
    ```jsx
    "use strict";
    
    function sum(num1, num2) {
      num1 = 100;
      const total1 = num1 + num2;
      console.log(total1);
      const total2 = arguments[0] + arguments[1];
      console.log(total2);
    }
    
    sum(10, 20);
    ```
    
- 8 . **Read-only properties cannot be deleted**
    
    ```jsx
    "use strict";
    
    delete Object.prototype;
    console.log(Object.prototype);
    ```
    
- **9 . Function scope inside a block scope**
    
    ```jsx
    "use strict";
    
    {
      function demo() {
        console.log("this is demo function");
      }
    
      const a = 10;
    }
    
    demo();
    ```
    
    ```jsx
    "use strict";
    
    if (true) {
      function demo() {
        console.log("this is demo function");
      }
    }
    demo();
    ```
    
- **10 . You cannot delete variables or functions**
    
    ```jsx
    "use strict";
    let x = 10;
    delete x;
    
    function demo() {
      console.log("demo fn");
    }
    
    delete demo;
    console.log(x);
    ```
    
- **11 . Reserved keywords cannot be used as variable names**
    
    ```jsx
    "use strict";
    
    let eval = 10;
    let arguments = 5;
    let public = 10;
    let static = 5;
    
    console.log(eval);
    console.log(arguments);
    ```
    
    reserved word link: [https://www.w3schools.com/js/js_reserved.asp](https://www.w3schools.com/js/js_reserved.asp)
    
- **12 . Class code is always strict**
    
    ```
    class Test {
      do() {
        // strict mode by default
        a = 10;
        console.log(a);
      }
    }
    const obj = new Test();
    
    // console.log(a);
    obj.do();
    
    ```
    

### **Use strict works**

- **Where Can We Write `"use strict"` in JavaScript**
    
    Top of a Script (Global Scope)
    
    ```jsx
    "use strict";
    
    let x =10;
    
    ```
    
    ---
    
    Inside a Function
    
    ```jsx
    functiontest() {
    "use strict";
    let a =10;
    }
    
    ```
    
    - only This function enables strict mode
    
    ---
    
    Inside an IIFE
    
    ```jsx
    (function () {
    "use strict";
    // strict code here
    })();
    
    ```
    
    ---
    
     ES6 Module (Auto Strict)
    
    ```jsx
    export const x =10;
    
    ```
    
    ---
    
    Inside Class (Auto Strict)
    
    ```jsx
    classTest {
    method() {
    // strict mode by default
      }
    }
    
    ```
    
    - class body running strict mode
- **Where `"use strict"` Does NOT Work**
    
    can't work Block scope 
    
    ```jsx
    if (true) {
    "use strict";// ❌ invalid
    }
    
    ```
    
    ---
    
    After other statements
    
    ```jsx
    let x =10;
    "use strict";// ❌ ignored
    ```
    
    - `"use strict"` **must be the first statement**
    
    ---