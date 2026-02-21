# assets

**What is this in JavaScript?**

- This refers to the object that is calling the function.
- **Golden Rule:**
    - কোন **object / context** থেকে function টা চলছে বা exetute হইছে, `this` সেই object-কেই নির্দেশ করে। অর্থাৎ exetution time এ this এর value নির্ধারণ হয় । 
    `This` value of this depends on how a function is called, not where it is written.
    - **Implicit binding: Implicit binding means that this is automatically (implicitly) set to the object that calls the function.**
    - **Explicit binding: Explicit binding** means you **manually set the value of `this`** for a function using special methods.
- ***Global Scope এ this***
    
    ```jsx
    console.log(this); // window
    this === window // true
    ```
    
    - Global scope এ `this` = `window` object
- **`this` in a Regular Function**
    
    ```jsx
    function show() {
      console.log(this);
    }
    
    show();
    ```
    
    ### Output:
    
    👉 `window` (in browser)
    
    📌 Because the function is called from the global context.
    
- **`this` Inside an Object Method**
    
    ```jsx
    const student = {
      name: "Rahim",
      showName: function () {
        console.log(this.name);
      }
    };
    
    student.showName();
    
    ```
    
    📌 Here,
    👉 this refers to the student object
    👉 Because the method is called using student.showName()
    
- `this` in Arrow Function ❌
    
    ```jsx
    const user = {
      name: "Karim",
      show: () => {
        console.log(this.name);
      }
    };
    
    user.show();
    
    ```
    
    Output:
    undefined
    
    📌 Why?
    👉 Arrow functions do not have their own this
    👉 They inherit this from their parent scope (here, window)
    
- **Correct Way (Use Normal Function)**
    
    ```jsx
    const user = {
      name: "Karim",
      show() {
        console.log(this.name);
      }
    };
    
    user.show();
    
    ```
    
    ✔️ Output:
    
    Karim
    
- **Function Inside Another Function (Common Mistake)**
    
    ```jsx
    const person = {
      name: "Suman",
      greet: function () {
        function inner() {
          console.log(this.name);
        }
        inner();
      }
    };
    
    person.greet();
    
    ```
    
    Output:
    undefined
    
    📌 Because inner() is a regular function
    👉 This refers to the window, not the person
    
    **Solution: Use Arrow Function**
    
    ```jsx
    const person = {
      name: "Suman",
      greet: function () {
        const inner = () => {
          console.log(this.name);
        };
        inner();
      }
    };
    
    person.greet();
    
    ✔️ Output:
    Suman
    
    ```
    
- **Implicitly bind this object**
    - **Rule of Implicit Binding:** When a function is called as a method of an object, this refers to that object.
    
    **Implicit Binding Can Be Lost**
    
    ### Example:
    
    ```jsx
    const user = {
    names:"Rahim",
    greet:function () {
    console.log(this.names);
      }
    };
    
    const sayHello = user.greet;
    sayHello();
    
    ```
    
    ### Output:
    
    ```
    undefined
    
    ```
    
    ### Why?
    
    - `sayHello()` is called without an object
    - So `this` is no longer bound to `user`
    - Implicit binding is lost
    
    ## **How to Fix It**
    
    ### Using `bind()`
    
    ```jsx
    const sayHello = user.greet.bind(user);
    sayHello();
    
    ```
    
    ✔️ Output:
    
    ```
    Rahim
    ```
    
    ## Implicit Binding vs Arrow Function
    
    ```jsx
    const user = {
    name:"Karim",
    greet:() => {
    console.log(this.name);
      }
    };
    
    user.greet();
    
    ```
    
    ❌ Output:
    
    ```
    undefined
    
    ```
    
    📌 Arrow functions **do not support implicit binding**
    
    They use `this` from the parent scope.
    
- **Explicitly bind this object**
    
    👉 **Explicit binding** means you **manually set the value of `this`** for a function using special methods.
    
    In JavaScript, explicit binding is done using:
    
    - `call()`
    - `apply()`
    - `bind()`
    
    ## `call()` – Explicit Binding
    
    ```jsx
    functiongreet() {
    console.log(this.name);
    }
    
    const user = {name:"Suman" };
    
    greet.call(user);
    
    ```
    
    ### Output:
    
    ```
    Suman
    
    ```
    
    📌 Here:
    
    - `call()` explicitly sets `this` to `user`
    - Function is executed immediately
    
    ---
    
    ### `call()` with Arguments
    
    ```jsx
    functionintro(age, city) {
    console.log(this.name, age, city);
    }
    
    intro.call({name:"Rahim" },22,"Dhaka");
    
    ```
    
    ---
    
    ## `apply()` – Explicit Binding
    
    ```jsx
    functionintro(age, city) {
    console.log(this.name, age, city);
    }
    
    intro.apply({name:"Karim" }, [25,"Chittagong"]);
    
    ```
    
    📌 Difference from `call()`:
    
    - Arguments are passed as an **array**
    
    ---
    
    ## `bind()` – Explicit Binding
    
    ```jsx
    functiongreet() {
    console.log(this.name);
    }
    
    const user = {name:"Rafi" };
    
    const boundFunc = greet.bind(user);
    boundFunc();
    
    ```
    
    📌 Important:
    
    - `bind()` **does NOT execute immediately**
    - It returns a **new function** with `this` permanently bound
- **this in Constructor Function**
    
    ```jsx
    function Student(name, age) {
      this.name = name;
      this.age = age;
    }
    
    const s1 = new Student("Rafi", 22);
    console.log(s1.name);
    
    ```
    
    📌 Here,
    👉 this refers to the newly created object (s1)
    
- **This is in Event Handler**
    
    ```jsx
    <button onclick="console.log(this)">Click</button>
    
    ```
    
    📌 Here,
    👉 this refers to the HTML element (button)
    
- **Use strict mode in this**
    - implicit bind is not happend