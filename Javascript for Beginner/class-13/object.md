# assets

- **Discussion keypoint**
    - Introduction to objects
    - object property
    - nested object
    - object creational pattern
    - object reference
    - object static method
    - object destructuring
    - optional chaning
    - prototypes
    - oop
- **How to create an Object**
    - There are many different ways to create an object
    - There are two things in an object
        - property
        - method
    
    ```jsx
    // literal syntax
    const user = {
    	property : value,
    	name:"sumon",
    	age:32
    }
    
    Propery must be string
    value is any datatype in javascript
    ```
    
    - access the object variable data
        - user. name  // dot notation
        - user[’ name’]   // [] notation for dynamic value or space
- **Why do we need to object**
    - An object in JavaScript is a way to store data in key–value pairs (like a small database).
    - It helps to group related data and functions together.
    - That's why data management is easy
    
    ### **Without an object:**
    
    ```jsx
    let name = "Suman";
    let age = 25;
    let city = "Dhaka";
    
    ```
    
    - If you have many people, you’ll end up with **too many variables** — hard to manage!
    
    ### **With an object:**
    
    ```jsx
    let person = {
      name: "Suman",
      age: 25,
      city: "Dhaka"
    };
    
    console.log(person.name); // Suman
    console.log(person.age);  // 25
    
    ```
    
    - Now all the related data about one person are **organized in one place** — inside the object.
- **crud operation on an object**
    
    ```jsx
    let user = {
      name: "sumon", 
       age: 32,
       "is valid": true,
       add:function(){
    	   console.log("add")
       }
      function multiple(){
    	  console.log("multiple")
      }
      akcc, // same key and value name
      
      };
      
      
      
      // read
    console.log(user.name); // "sumon"
    console.log(user.age); // 32
    
    // create or update(if propery name is already exist then replace it)
    user.isSeniorCitizen = false;
    user["married"]=yes 
    console.log(user);
    console.log(user["is valid"]); // must be [] brackets
    
    // delete
    delete user.age
    
    // dynamic property and value create
    const somekey = "age"
    user[somekey] = 500
    
    //create a project in window.promt
    
    let name = prompt("name please")
    let value = prompt("age please")
    user[name] = value
    ```
    
- **nested object**
    - A nested object means an object inside another object.
    - In other words, when one of the properties of an object is itself an object, it’s called nested.
    
    ### 🔹 **Example:**
    
    ```jsx
    let person = {
      name: "Suman",
      age: 25,
      address: {
        city: "Dhaka",
        country: "Bangladesh"
      }
    };
    
    console.log(person.name);           // Suman
    console.log(person.address.city);   // Dhaka
    console.log(person.address?.country); // Bangladesh
    
    ```
    
    ### 🔹 **Example of Multiple Nesting:**
    
    ```jsx
    let company = {
      name: "TechSoft",
      employees: {
        developer: {
          name: "Suman",
          skill: "JavaScript"
        },
        designer: {
          name: "Rahim",
          skill: "Figma"
        }
      }
    };
    
    console.log(company.employees.developer.name); // Suman
    console.log(company?.employees?.designer?.skill); // Figma
    
    ```
    
    ### 🧩 **Update a Value in a Nested Object:**
    
    ```jsx
    person.address.city = "Chittagong";
    console.log(person.address.city); // Chittagong ✅
    
    ```
    
    ---
    
    ### ⚠️ **Check Before Accessing:**
    
    To avoid that, use **optional chaining (?.)**:
    
    ```jsx
    console.log(person.job?.title); // undefined (no error)
    
    ```
    
- **in Operator**
    - The **`in` operator** is used to **check if a property exists** inside an **object** (or an index in an array).
    - It returns **`true`** if the property exists, otherwise **`false`**.
    
    ### 🔹 **Example with Object:**
    
    ```jsx
    const person = {
      name: "Suman",
      age: 25
    };
    
    console.log("name" in person); // true ✅
    console.log("city" in person); // false ❌
    
    ```
    
    🧩 Explanation:
    
    - `"name"` → exists in the `person` object ✅
    - `"city"` → does not exist ❌
    
    ---
    
    ### 🔹 **Example with Array:**
    
    ```jsx
    const numbers = [10, 20, 30];
    
    console.log(0 in numbers); // true ✅ (index 0 exists)
    console.log(3 in numbers); // false ❌ (no index 3)
    
    ```
    
    🧠 Here, `in` checks the **index**, not the value.
    
    ---
    
    ### 🔹 **Example with Nested Object:**
    
    ```jsx
    const student = {
      info: {
        name: "Rahim",
        roll: 5
      }
    };
    
    console.log("info" in student); // true
    console.log("name" in student); // false (not directly in student)
    console.log("name" in student.info); // true ✅
    
    ```
    
    ---
    
    ### 🔹 **Example with `for...in` Loop:**
    
    You can use `in` with a loop to go through all object keys.
    
    ```jsx
    const person = { name: "Suman", age: 25, city: "Dhaka" };
    
    for (let key in person) {
      console.log(key, ":", person[key]);
    }
    
    ```
    
    🟢 Output:
    
    ```
    name : Suman
    age : 25
    city : Dhaka
    
    ```
    
    ---
    
    ### ⚠️ **Important Notes:**
    
    - `in` checks **both own and inherited properties**.
    - It works only for **objects** and **arrays**, not for primitive values.
    
    ```jsx
    console.log("length" in "Hello"); // true ✅ (string object has length)
    console.log("abc" in "Hello");    // false ❌
    
    ```
    
- **Regular function and return keyword**
    
    ```jsx
    function add(a, b) {
      return a + b;
    }
    
    console.log(add(5, 3)); // Output: 8
    
    ```
    
- **Constructor Function**
    - A **Constructor Function** is a **special type of regular function** used to **create objects** easily.
    - It acts like a **blueprint** for making many similar objects.
    
    ### 🔹 **Rules for Constructor Functions:**
    
    1. The function name should **start with a capital letter** (by convention).
    2. Use the **`new` keyword** to create objects from it.
    
    ### 🔹 **Example:**
    
    ```jsx
    function Person(name, age, city) {
      this.name = name;
      this.age = age;
      this.city = city;
    }
    
    ```
    
    Now we can use it to create many objects 👇
    
    ```jsx
    const person1 = new Person("Suman", 25, "Dhaka");
    const person2 = new Person("Rahim", 30, "Chittagong");
    
    console.log(person1.name); // Suman
    console.log(person2.city); // Chittagong
    
    ```
    
    ✅ Each object (`person1`, `person2`) gets its own data, created using the same **constructor function**.
    
    ### 🔍 **How It Works:**
    
    When you use `new Person("Suman", 25, "Dhaka")`:
    
    1. A **new empty object** is created.
    2. The **`this`** keyword inside the function refers to that new object.
    3. The new object gets properties (`name`, `age`, `city`).
    4. The new object is **returned automatically**.
    
    ### 🔹 **Adding Methods Inside a Constructor:**
    
    ```jsx
    function Person(name, age) {
      this.name = name;
      this.age = age;
    
      this.greet = function() {
        console.log("Hello, my name is " + this.name);
      };
    }
    
    const person1 = new Person("Suman", 25);
    person1.greet(); // Hello, my name is Suman
    
    ```
    
- **Build in Object Constructor**
    
    ```jsx
    const persion = new Object()
    person.name="sumon"
    person.age=32;
    console.log(person)
    ```
    
- **Factory Function**
    - A Factory Function is a normal function that returns a new object every time it is called.
    - It’s like a machine (factory) that builds and returns new objects.
    
    ### 🔹 **Example:**
    
    ```jsx
    function createPerson(name, age, city) {
      return {
        name: name,
        age: age,
        city: city,
        greet() {
          console.log("Hello, my name is " + this.name);
        }
      };
    }
    
    const person1 = createPerson("Suman", 25, "Dhaka");
    const person2 = createPerson("Rahim", 30, "Chittagong");
    
    person1.greet(); // Hello, my name is Suman
    person2.greet(); // Hello, my name is Rahim
    
    ```
    
    ✅ Every time you call `createPerson()`, it returns a **new object** with its own properties and methods.
    
    ---
    
    ### 🔍 **How It Works:**
    
    1. The function `createPerson()` defines an object.
    2. It **returns** that object.
    3. Each time you call it, you get a **new copy** of that object.
    
    ---
    
    ### 🔹 **Advantages of Factory Functions:**
    
    ✅ Easier to create **multiple similar objects**
    
    ✅ No need to use `new` keyword
    
    ✅ Avoids confusion with `this` (safer than constructor functions)
    
    ✅ Works well with closures
    
    ---
    
    ### 🔹 **Example with a Closure:**
    
    ```jsx
    function createCounter() {
      let count = 0;
    
      return {
        increment() {
          count++;
          console.log(count);
        },
        decrement() {
          count--;
          console.log(count);
        }
      };
    }
    
    const counter = createCounter();
    counter.increment(); // 1
    counter.increment(); // 2
    counter.decrement(); // 1
    
    ```
    
    🧩 Here, `count` is private —
    
    You can’t access it directly (`counter.count` ❌)
    
    Only through `increment()` and `decrement()` methods.
    
    That’s possible because of **closures** + factory function.
    
- **Object Static method**
    - Object.assign()
        - The **`Object.assign()`** method is used to **copy properties** from **one or more source objects** into a **target object**.
        - It returns the **updated target object**.
        
        ### 🧩 **Syntax:**
        
        ```jsx
        Object.assign(target, source1, source2, ...);
        
        ```
        
        - **target** → the object that will receive properties
        - **source1, source2, ...** → the objects whose properties will be copied
        
        ---
        
        ### 🔹 **Example 1: Copy properties**
        
        ```jsx
        const person = { name: "Suman" };
        const info = { age: 25, city: "Dhaka" };
        
        const result = Object.assign(person, info);
        
        console.log(result); // { name: 'Suman', age: 25, city: 'Dhaka' }
        
        ```
        
        🧠 Here:
        
        - `info` object’s properties are copied **into** `person`.
        - The result and `person` are both **updated**.
        
        ---
        
        ### 🔹 **Example 2: Copy into a new empty object**
        
        If you don’t want to change the original objects, use `{}` as the target:
        
        ```jsx
        const person = { name: "Suman" };
        const info = { age: 25 };
        
        const result = Object.assign({}, person, info);
        console.log(result); // { name: 'Suman', age: 25 }
        
        ```
        
        ✅ Original objects remain unchanged.
        
        ---
        
        ### 🔹 **Example 3: Overwriting same properties**
        
        If two objects have the same property, **the last one overwrites the previous**.
        
        ```jsx
        const obj1 = { name: "Suman", age: 20 };
        const obj2 = { age: 25, city: "Dhaka" };
        
        const result = Object.assign({}, obj1, obj2);
        console.log(result); // { name: 'Suman', age: 25, city: 'Dhaka' }
        
        ```
        
        🧠 `age` changed from `20` → `25` because `obj2` came last.
        
        ---
        
        ### 🔹 **Example 4: Shallow copy - 1 lavel copy (not deep copy)**
        
        `Object.assign()` makes a **shallow copy**, not a deep one.
        
        ```jsx
        const user = {
          name: "Suman",
          address: { city: "Dhaka" }
        };
        
        const copy = Object.assign({}, user);
        copy.address.city = "Chittagong";
        
        console.log(user.address.city); // "Chittagong" 😬 (original changed too)
        
        ```
        
        🧩 Because nested objects are **shared by reference**, not duplicated.
        
        ---
        
        ### 🔹 **Example 5: Add new property to an object**
        
        ```jsx
        const person = { name: "Suman" };
        
        Object.assign(person, { age: 25 });
        console.log(person); // { name: 'Suman', age: 25 }
        
        ```
        
    - Object.create()
        - `Object.create()` is used to **create a new object** and **set another object as its prototype** (parent).
        - In other words, it lets one object **inherit properties and methods** from another object.
        
        ### **Syntax:**
        
        ```jsx
        Object.create(prototype, propertiesObject)
        
        ```
        
        - **prototype** → the object you want to use as the parent.
        - **propertiesObject** *(optional)* → extra properties for the new object.
        
        ---
        
        ### 🔹 **Example 1: Basic Use**
        
        ```jsx
        const person = {
          greet() {
            console.log("Hello!");
          }
        };
        
        // Create a new object that inherits from person
        const student = Object.create(person);
        
        student.greet(); // 👉 Hello!
        
        ```
        
        🧠 Here:
        
        - `person` is the **prototype** (parent).
        - `student` is a new object that inherits `greet()` from `person`.
        
        ---
        
        ### 🔹 **Example 2: Add Your Own Properties**
        
        ```jsx
        const person = {
          greet() {
            console.log("Hello, " + this.name);
          }
        };
        
        const student = Object.create(person);
        student.name = "Suman";
        
        student.greet(); // 👉 Hello, Suman
        
        ```
        
        ✅ `student` inherited the `greet()` method from `person`,
        
        but has its **own `name`** property.
        
        ---
        
        ### 🔹 **Example 3: Check Prototype Relationship**
        
        ```jsx
        console.log(Object.getPrototypeOf(student) === person);
        // 👉 true
        
        ```
        
        🧩 Means `person` is the **prototype** of `student`.
        
        ---
        
        ### 🔹 **Example 4: Add properties directly while creating**
        
        ```jsx
        const person = {
          greet() {
            console.log("Hi " + this.name);
          }
        };
        
        const student = Object.create(person, {
          name: { value: "Rahim" },
          age: { value: 20 }
        });
        
        student.greet(); // 👉 Hi Rahim
        console.log(student.age); // 👉 20
        
        ```
        
    - Object.key()
        - Create a new array with the property
    - Object.entries()
        - Create a new array with the object value
    - Object.fromentries()
        - Create an object from a Map data structure
        
        ```jsx
        const entriesData = new Map([
          ["city", "khulna"],
          ["age", 32],
        ]);
        
        const result = Object.fromEntries(entriesData);
        console.log(result)
        ```
        
    - Object.value()
    - Object.groupBy()
        
        ### 🔍 Syntax
        
        ```jsx
        Object.groupBy(items, callbackFn)
        
        ```
        
        - `items`: an iterable (e.g., an array) whose elements you want to group. [MDN Web Docs+1](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/groupBy?utm_source=chatgpt.com)
        - `callbackFn(element, index)`: a function called for each element; it returns a value that will be coerced into a string or symbol to act as the **group key**.
        
        ## 🔧 How to Use It: Examples
        
        ### Example 1: Group by a simple property
        
        ```jsx
        const people = [
          { name: "Suman", age: 25 },
          { name: "Rahim", age: 30 },
          { name: "Karim", age: 25 },
        ];
        
        const grouped = Object.groupBy(people, person => person.age);
        
        console.log(grouped);
        /*
        {
          "25": [
            { name: "Suman", age: 25 },
            { name: "Karim", age: 25 }
          ],
          "30": [
            { name: "Rahim", age: 30 }
          ]
        }
        */
        
        ```
        
        ### Example 2: Group by derived criteria (callback more complex)
        
        ```jsx
        const inventory = [
          { name: "asparagus", type: "vegetables", quantity: 9 },
          { name: "bananas", type: "fruit", quantity: 5 },
          { name: "goat", type: "meat", quantity: 23 },
          { name: "cherries", type: "fruit", quantity: 12 },
          { name: "fish", type: "meat", quantity: 22 }
        ];
        
        const result = Object.groupBy(inventory, item =>
          item.quantity < 6 ? "restock" : "sufficient"
        );
        
        console.log(result);
        /*
        {
          restock: [
            { name: "bananas", type: "fruit", quantity: 5 }
          ],
          sufficient: [
            { name: "asparagus", type: "vegetables", quantity: 9 },
            { name: "goat", type: "meat", quantity: 23 },
            { name: "cherries", type: "fruit", quantity: 12 },
            { name: "fish", type: "meat", quantity: 22 }
          ]
        }
        */
        
        ```
        
    
    ### Object configuration
    
- **shallow copy vs deep copy**
- **Object Destructuring**
    - **Object Destructuring** is a way to **extract values** from an **object** and **store them in variables** easily.
    - It makes your code **shorter, cleaner, and easier to read**.
    
    ### 🔹 **Normal Way (Without Destructuring):**
    
    ```jsx
    const person = { name: "Suman", age: 25, city: "Dhaka" };
    
    const name = person.name;
    const age = person.age;
    const city = person.city;
    
    console.log(name, age, city);
    
    ```
    
    ✅ Works fine, but a bit long and repetitive.
    
    ---
    
    ### 🔹 **With Destructuring (Short Way):**
    
    ```jsx
    const person = { name: "Suman", age: 25, city: "Dhaka" };
    
    const { name, age, city } = person;
    
    console.log(name, age, city);
    
    ```
    
    🧩 Same result, but much cleaner.
    
    ---
    
    ### 🔹 **Change Variable Names or alias variable name**
    
    You can rename variables while destructuring 👇
    
    ```jsx
    const person = { name: "Suman", age: 25 };
    
    const { name: fullName, age: years } = person;
    
    console.log(fullName); // Suman
    console.log(years);    // 25
    
    ```
    
    Here:
    
    - `name` → stored in variable `fullName`
    - `age` → stored in variable `years`
    
    ---
    
    ### 🔹 **Set Default Values**
    
    If a property doesn’t exist, you can give a **default value**.
    
    ```jsx
    const person = { name: "Suman" };
    
    const { name, city = "Unknown" } = person;
    
    console.log(city); // Unknown
    
    ```
    
    ---
    
    ### 🔹 **Nested Object Destructuring**
    
    You can extract values from nested objects too 👇
    
    ```jsx
    const student = {
      name: "Rahim",
      address: {
        city: "Dhaka",
        country: "Bangladesh"
      }
    };
    
    const { address: { city, country } } = student;
    
    console.log(city);    // Dhaka
    console.log(country); // Bangladesh
    
    ```
    
    ---
    
    ### 🔹 **Destructuring in Function Parameters**
    
    You can destructuring directly in a function’s arguments 👇
    
    ```jsx
    function showInfo({ name, age }) {
      console.log(`Name: ${name}, Age: ${age}`);
    }
    
    const person = { name: "Suman", age: 25 };
    
    showInfo(person);
    // 👉 Name: Suman, Age: 25
    
    ```
    
    **Destructuring in For of Loop**
    
    ```jsx
    const people = [
      { name: "Suman", age: 25 },
      { name: "Rahim", age: 30 },
      { name: "Karim", age: 28 }
    ];
    
    for (const { name, age } of people) {
      console.log(`${name} is ${age} years old.`);
    }
    
    ```
    
- **Optional Chaining**
    - **Optional chaining (`?.`)** allows you to **safely access deeply nested object properties** without getting an error if a property doesn’t exist.
    - If the property doesn’t exist, it **returns `undefined` instead of throwing an error**.
    
    ### 🔹 **The Problem (Without Optional Chaining):**
    
    ```jsx
    const user = {
      name: "Suman",
      address: {
        city: "Dhaka"
      }
    };
    
    console.log(user.address.city); // ✅ Dhaka
    console.log(user.address.country.name); // ❌ Error: Cannot read properties of undefined
    
    ```
    
    If you try to access `user.address.country.name`, JavaScript throws an **error** because `country` doesn’t exist.
    
    ---
    
    ### 🔹 **Solution: Using Optional Chaining (`?.`)**
    
    ```jsx
    const user = {
      name: "Suman",
      address: {
        city: "Dhaka"
      }
    };
    
    console.log(user.address?.city);          // ✅ Dhaka
    console.log(user.address?.country?.name); // ✅ undefined (no error!)
    
    ```
    
    🧠 `?.` checks each part:
    
    - If `address` exists → it continues
    - If `country` doesn’t exist → returns `undefined` safely
    
    ---
    
    ### 🔹 **Example with Functions**
    
    ```jsx
    const user = {
      name: "Suman",
      greet() {
        console.log("Hello!");
      }
    };
    
    user.greet?.();     // ✅ "Hello!"
    user.sayHi?.();     // ✅ No error, just undefined
    
    ```
    
    🧩 `sayHi` doesn’t exist — but no error because of `?.()`
    
    ---
    
    ### 🔹 **Example with Arrays**
    
    ```jsx
    const users = [
      { name: "Suman" },
      null,
      { name: "Rahim" }
    ];
    
    console.log(users[0]?.name); // Suman
    console.log(users[1]?.name); // undefined (no error)
    
    ```
    
    ---
    
    ### 🔹 **Optional Chaining with Dynamic Keys**
    
    ```jsx
    const person = { name: "Suman" };
    const key = "age";
    
    console.log(person?.[key]); // undefined (safe)
    
    ```
    
    ---
    
    ### ⚠️ **Without Optional Chaining**
    
    You would normally write:
    
    ```jsx
    if (user && user.address && user.address.country) {
      console.log(user.address.country.name);
    }
    
    ```
    
    ✅ Optional chaining simplifies this to:
    
    ```jsx
    console.log(user?.address?.country?.name);
    
    ```
    
- **JavaScript Object Protection**
    - after