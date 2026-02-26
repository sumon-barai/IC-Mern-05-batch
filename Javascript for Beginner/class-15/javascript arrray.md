# assets

- What is an Array in JavaScript?
    - **In JavaScript, an array can store multiple values of different JavaScript data types in a single variable.**
    - This means a single array can store:
        - Numbers
        - Strings
        - Booleans
        - Objects
        - Arrays
        - Functions
        - Even mixed data types together
        
        ```jsx
        let data = [
          10,                 // Number
          "Suman",            // String
          true,               // Boolean
          { age: 25 },        // Object
          [1, 2, 3],          // Array
          function () {       // Function
            console.log("Hello");
          }
        ];
        ```
        
    - In an array, data can be stored in a position
    - The position of a data in the array is known as its index
    - The index always starts with 0
    - The index always ends with length -1
    - **JavaScript array length is not fixed; you can change the length at any time with a positive numeric value**
- Create an Array
    - Using Array Literal (Recommended)
        
        ```jsx
        let fruits = ["Apple", "Banana", "Mango"]; // string array
        let numbers = [10, 20, 30, 40]; // number array
        let data = [1, "Hello", true, { id: 1 }]; // mixed array
        let data2 = [1, [2, 3],[4,5]]; // nested array
        ```
        
    - Using the array Constructor
        
        ```jsx
        let fruits = new Array("Apple", "Banana", "Mango"); // create array
        let emptyArr = new Array(); // create an empty array
        let arr = new Array(5); // creates empty array with length 5
        let arr = new Array(1,5); // create an number array
        ```
        
    
- Get Elements from an Array
    - In JavaScript, you can get elements from an array by using their **index number**.
    - **Array index always starts from 0**
    - **The index always ends with length -1**
    
    **1. Using Index Number (Most Common)**
    
    Example
    
    ```jsx
    let fruits = ["Apple","Banana","Mango"];
    
    console.log(fruits[0]);// Apple
    console.log(fruits[1]);// Banana
    console.log(fruits[2]);// Mango
    
    ```
    
    ---
    
    **2. Get Last Element of an Array**
    
    ### Using `length`
    
    ```jsx
    let fruits = ["Apple","Banana","Mango"];
    
    let lastFruit = fruits[fruits.length -1];
    console.log(lastFruit);// Mango
    
    ```
    
    ---
    
    **3. Using Loop to Get All Elements**
    
    ```jsx
    let numbers = [10,20,30];
    
    for (let i =0; i < numbers.length; i++) {
    console.log(numbers[i]);
    }
    
    ```
    
    ### 
    
- Add Elements to an Array
    - In JavaScript, there are **multiple ways** to add elements to an array, depending on **where** you want to add them.
    
    **1. Add Element at the End – `push()`**
    
    Example
    
    ```jsx
    let fruits = ["Apple","Banana"];
    
    fruits.push("Mango"); // push single data
    
    console.log(fruits);
    // ["Apple", "Banana", "Mango"]
    
    fruits.push(3,4,5); // push multiple data
    
    ```
    
    ---
    
    **2. Add Element at the Beginning – `unshift()`**
    
    ```jsx
    let fruits = ["Banana","Mango"];
    
    fruits.unshift("Apple");
    
    console.log(fruits);
    // ["Apple", "Banana", "Mango"]
    
    ```
    
    ---
    
    **3. Add Element at a Specific Index**
    
    ```jsx
    let fruits = ["Apple","Mango"];
    
    fruits[1] ="Banana";
    
    console.log(fruits);
    // ["Apple", "Banana"]
    
    ```
    
    ⚠️ **Be careful: This can replace existing data**
    
    ---
    
    **4. Using `splice()` (Very Powerful)**
    
    ```jsx
    let fruits = ["Apple","Mango"];
    
    fruits.splice(1,0,"Banana");
    
    console.log(fruits);
    // ["Apple", "Banana", "Mango"]
    ```
    
    ### Syntax
    
    ```jsx
    array.splice(startIndex, deleteCount, item1, item2, ...)
    ```
    
    ---
    
- Remove Elements from an Array
    - In JavaScript, elements can be removed from an array in **different ways**, depending on **where** and **how many** elements you want to remove.
    
    **1. Remove Element from the End – `pop()`**
    
    ```jsx
    let fruits = ["Apple","Banana","Mango"];
    
    fruits.pop();
    
    console.log(fruits);
    // ["Apple", "Banana"]
    
    ```
    
    ---
    
    **2. Remove Element from the Beginning – `shift()`**
    
    ```jsx
    let fruits = ["Apple","Banana","Mango"];
    
    fruits.shift();
    
    console.log(fruits);
    // ["Banana", "Mango"]
    
    ```
    
    ---
    
    **3. Remove Element from a Specific Index – `splice()`**
    
    ```jsx
    let fruits = ["Apple","Banana","Mango"];
    
    fruits.splice(1,1);
    
    console.log(fruits);
    // ["Apple", "Mango"]
    
    ```
    
    ### Syntax
    
    ```jsx
    array.splice(startIndex, deleteCount);
    
    ```
    
    ---
    
    **4. Remove Multiple Elements Using `splice()`**
    
    ```jsx
    let numbers = [10,20,30,40,50];
    
    numbers.splice(1,3);
    
    console.log(numbers);
    // [10, 50]
    
    ```
    
    ---
    
    5. Remove All Elements (Clear Array)
    
    ```jsx
    let fruits = ["Apple","Banana"];
    fruits.length =0;
    
    console.log(fruits);
    // []
    
    ```
    
- Copy and Clone an Array
    - In JavaScript, **copying an array** means creating a **new array** with the same values, **without changing the original array**.
    
    **1. Wrong Way to copy (Reference Copy)**
    
    ```jsx
    let arr1 = [1,2,3];
    let arr2 = arr1;
    
    arr2.push(4);
    
    console.log(arr1);// [1, 2, 3, 4]
    ```
    
    Both variables point to the **same array in memory**.
    
    ---
    
    **2. Using `slice()`  for Shallow Copy**
    
    ```jsx
    let arr1 = [1,2,3];
    let arr2 = arr1.slice();
    
    arr2.push(4);
    
    console.log(arr1);// [1, 2, 3]
    console.log(arr2);// [1, 2, 3, 4]
    ```
    
    ---
    
    **3. Using Spread Operator `...` (Most Popular) for Shallow Copy**
    
    ```jsx
    let arr1 = [1,2,3];
    let arr2 = [...arr1];
    
    arr2.push(4);
    ```
    
    ---
    
    **4. Using `Array.from()`**
    
    ```jsx
    let arr1 = [1,2,3];
    let arr2 =Array.from(arr1);
    ```
    
    ---
    
    **5. ✅ Using `concat()`**
    
    ```jsx
    let arr1 = [1,2,3];
    let arr2 = [].concat(arr1);
    ```
    
- Determine a Value is an Array
    - In JavaScript, the **best and safest way** to check whether a value is an array is by using **`Array.isArray()`**.
    
    1. **Array.isArray()**
    
    ```jsx
    let data = [1,2,3];
    
    console.log(Array.isArray(data));// true
    console.log(Array.isArray(name));// false
    
    ```
    
    ---
    
    ### 2. Using `instanceof Array`
    
    ```jsx
    [1,2,3]instanceofArray;// true
    ```
    
    **Wrong Ways**
    
    Using `typeof`
    
    ```jsx
    typeof [1,2,3];// "object"
    ```
    
    ---
    
- Array Destructuring
    - **Array destructuring** is a modern JavaScript feature that allows you to **extract values from an array and assign them to variables** in a clean and readable way.
    
    **1. Basic Array Destructuring**
    
    **Without Destructuring**
    
    ```jsx
    let numbers = [10,20,30];
    
    let a = numbers[0];
    let b = numbers[1];
    let c = numbers[2];
    ```
    
    **With Destructuring**
    
    ```jsx
    
    let [a, b, c] = [10,20,30];
    
    console.log(a);// 10
    console.log(b);// 20
    console.log(c);// 30
    
    ```
    
    ---
    
    **2. Skipping Elements**
    
    ```jsx
    let numbers = [10,20,30,40];
    
    let [first, , third] = numbers;
    
    console.log(first);// 10
    console.log(third);// 30
    
    ```
    
    ---
    
    **3. Using Rest Operator `...`**
    
    ```jsx
    let numbers = [1,2,3,4,5];
    
    let [first, second, ...rest] = numbers;
    
    console.log(first);// 1
    console.log(second);// 2
    console.log(rest);// [3, 4, 5]
    
    ```
    
    ---
    
    **4. Default Values**
    
    ```jsx
    let numbers = [10];
    
    let [a, b =20] = numbers;
    
    console.log(a);// 10
    console.log(b);// 20
    ```
    
    ---
    
    **5. Swapping Variables Using Destructuring**
    
    ```jsx
    let x =5;
    let y =10;
    
    [x, y] = [y, x];
    
    console.log(x);// 10
    console.log(y);// 5
    ```
    
    ---
    
    **6. Destructuring in Function Return**
    
    ```jsx
    functiongetScores() {
    return [80,90];
    }
    
    let [math, english] =getScores();
    
    console.log(math);// 80
    console.log(english);// 90
    
    ```
    
    ---
    
    **7. Nested Array Destructuring**
    
    ```jsx
    let data = [1, [2,3]];
    
    let [a, [b, c]] = data;
    
    console.log(a);// 1
    console.log(b);// 2
    console.log(c);// 3
    
    ```
    
- The Rest Parameter
    - In JavaScript, the **rest parameter** lets you collect an indefinite number of arguments into an array. It’s written using **three dots (`...`)**
    
    **Basic Syntax**
    
    ```jsx
    functionmyFunction(...args) {
    console.log(args);
    }
    ```
    
    - `args` becomes a real array
    - It contains all arguments passed to the function
    
    ```jsx
    myFunction(1,2,3);
    // [1, 2, 3]
    
    ```
    
    ---
    
    **2. Rest Parameter with Named Parameters**
    
    You can combine normal parameters with the rest parameter, but **the rest parameter must be last**.
    
    ```jsx
    functionsum(multiplier, ...numbers) {
    return numbers.reduce((total, n) => total + n,0) * multiplier;
    }
    
    sum(2,1,2,3);// (1 + 2 + 3) * 2 = 12
    ```
    
    ---
    
    **3. Rest Parameter vs `arguments`**
    
    **Rest Parameter**
    
    - Real array
    - Works with arrow functions
    
    ```jsx
    functionexample(...args) {
    return args.map(x => x *2);
    }
    
    ```
    
    **`arguments` Object**
    
    - Array-like, not a real array
    - Not available in arrow functions
    
    ```jsx
    functionexample() {
    returnArray.from(arguments).map(x => x *2);
    }
    
    ```
    
    - Prefer **rest parameters** in modern JavaScript.
    
    ---
    
    **4. Using Rest Parameters in Arrow Functions**
    
    ```jsx
    constmultiply = (...nums) => nums.reduce((a, b) => a * b,1);
    
    multiply(2,3,4);// 24
    
    ```
    
    ---
    
    **5. Rest Parameter in Destructuring**
    
    **Array Destructuring**
    
    ```jsx
    const [first, ...rest] = [10,20,30,40];
    
    console.log(first);// 10
    console.log(rest);// [20, 30, 40]
    ```
    
    **Object Destructuring**
    
    ```jsx
    const { id, ...details } = {
    id:1,
    name:"Alice",
    age:25
    };
    
    console.log(details);
    // { name: "Alice", age: 25 }
    
    ```
    
    ---
    
- **The Spread Operator**
    
    **1. Spread Operator with Arrays**
    
    **Copy an Array (Shallow Copy)**
    
    ```jsx
    const nums = [1,2,3];
    const copy = [...nums];
    
    console.log(copy);// [1, 2, 3]
    
    ```
    
    **Merge Arrays**
    
    ```jsx
    const a = [1,2];
    const b = [3,4];
    
    const merged = [...a, ...b];
    console.log(merged);// [1, 2, 3, 4]
    ```
    
    **Add Elements While Copying**
    
    ```jsx
    const numbers = [2,3];
    const updated = [1, ...numbers,4];
    
    console.log(updated);// [1, 2, 3, 4]
    
    ```
    
    ---
    
    **2. Spread Operator with Function Calls**
    
    **Pass an Array as Arguments**
    
    ```jsx
    const nums = [5,10,15];
    
    Math.max(...nums);// 15
    
    ```
    
    ---
    
    **3. Spread Operator with Objects** 
    
    **Copy an Object**
    
    ```jsx
    const user = {name:"John",age:30 };
    const clone = { ...user };
    
    console.log(clone);
    ```
    
    **Merge Objects**
    
    ```jsx
    const a = {x:1 };
    const b = {y:2 };
    
    const merged = { ...a, ...b };
    // { x: 1, y: 2 }
    
    ```
    
    **Override Properties**
    
    ```jsx
    const user = {name:"John",age:25 };
    
    const updated = { ...user,age:30 };
    
    console.log(updated);
    // { name: "John", age: 30 }
    
    ```
    
    ---
    
    **4. Spread Operator with Strings**
    
    ```jsx
    const str ="JS";
    const chars = [...str];
    
    console.log(chars);// ["J", "S"]
    ```
    
- **The length**
    - In JavaScript, the **`length` property** is used to determine the size or count of elements, characters, or parameters
    
    **1. `length` with Strings**
    
    Returns the number of characters in a string.
    
    ```jsx
    const text ="Hello JS";
    
    console.log(text.length);// 8
    
    ```
    
    ✔ Includes spaces
    
    ✔ Counts UTF-16 code units (some emojis count as 2)
    
    ```jsx
    "😊".length;// 2
    ```
    
    ---
    
    **2. `length` with Arrays**
    
    Returns the number of elements in an array.
    
    ```jsx
    const arr = [10,20,30];
    
    console.log(arr.length);// 3
    
    ```
    
    **Dynamic Behavior**
    
    ```jsx
    arr.length =5;
    console.log(arr);// [10, 20, 30, <2 empty items>]
    
    arr.length =2;
    console.log(arr);// [10, 20]
    
    ```
    
    - Reducing `length` removes elements permanently.
    
    ---
    
    **3. `length` with Functions**
    
    Returns the number of **expected parameters** (not arguments passed).
    
    ```jsx
    function add(a, b, c) {}
    console.log(add.length);// 3
    
    ```
    
    ### With Default & Rest Parameters
    
    ```jsx
    functiontest(a, b = 2, ...rest) {}
    
    console.log(test.length);// 1
    
    ```
    
    ✔ Stops counting at the first parameter with a default value
    
    ✔ Rest parameters are not counted
    
    ---
    
    ## 4. `length` with Arguments Object
    
    ```jsx
    functiondemo() {
    console.log(arguments.length);
    }
    
    demo(1,2,3);// 3
    
    ```
    
    ---
    
    ## 5. `length` with Objects
    
    Plain objects do **not** have a `length` property.
    
    ```jsx
    const obj = {a:1,b:2 };
    console.log(obj.length);// undefined
    
    ```
    
    ✅ Alternative:
    
    ```jsx
    Object.keys(obj).length;// 2
    
    ```
    
- **Array Methods**
    - **The concat() array method**
        - The **`concat()`** method is used to **merge two or more arrays** and return a **new array**.
        - It does **not change** the original arrays.
        
        **1. Basic Example**
        
        ```jsx
        let arr1 = [1, 2];
        let arr2 = [3, 4];
        
        let result = arr1.concat(arr2);
        
        console.log(result); // [1, 2, 3, 4]
        
        ```
        
        **2. Concatenating Multiple Arrays**
        
        ```jsx
        let a = [1];
        let b = [2];
        let c = [3];
        
        let result = a.concat(b, c);
        
        console.log(result);// [1, 2, 3]
        
        ```
        
        ---
        
        **3. Adding Values (Not Only Arrays)**
        
        ```jsx
        let numbers = [1,2];
        
        let result = numbers.concat(3,4);
        
        console.log(result);// [1, 2, 3, 4]
        
        ```
        
        ---
        
        **4. Original Array is Not Modified**
        
        ```jsx
        let arr1 = [10,20];
        let arr2 = [30];
        
        let result = arr1.concat(arr2);
        
        console.log(arr1);// [10, 20]
        console.log(result);// [10, 20, 30]
        
        ```
        
        ---
        
        **5. Using `concat()` to Clone an Array**
        
        ```jsx
        let original = [1,2,3];
        let copy = [].concat(original);
        
        ```
        
    - **The join() array method**
        - The **`join()`** method is used to **combine all elements of an array into a single string**.
        - It does **not change** the original array.
        
        **Syntax**
        
        ```jsx
        array.join(separator)
        ```
        
        - **separator** (optional) → The string used to separate elements
        - Default separator is a **comma ( , )**
        
        **1. Basic Example**
        
        ```jsx
        let fruits = ["Apple","Banana","Mango"];
        
        let result = fruits.join();
        
        console.log(result);
        // "Apple,Banana,Mango"
        
        ```
        
        **2. Using a Custom Separator**
        
        ```jsx
        let fruits = ["Apple","Banana","Mango"];
        
        console.log(fruits.join(" - "));
        // "Apple - Banana - Mango"
        
        ```
        
        **3. Join with Space**
        
        ```jsx
        let words = ["JavaScript","is","fun"];
        
        console.log(words.join(" "));
        // "JavaScript is fun"
        
        ```
        
        **4. Join with Empty String**
        
        ```jsx
        let letters = ["H","E","L","L","O"];
        
        console.log(letters.join(""));
        // "HELLO"
        
        ```
        
        **5. Important Note**
        
        ```jsx
        let arr = [1,2,3];
        
        let str = arr.join();
        
        console.log(typeof str);// string
        
        ```
        
        🔹 `join()` always returns a **string**
        
        ---
        
        ## Difference Between `join()` and `toString()`
        
        | Method | Separator Customizable? | Return Type |
        | --- | --- | --- |
        | `join()` | ✅ Yes | String |
        | `toString()` | ❌ No (always comma) | String |
    - **The fill() array method**
        - The **`fill()`** method is used to **fill all or part of an array with a static value**.
        - It **modifies the original array**
        
        **Syntax**
        
        ```jsx
        array.fill(value, start, end)
        ```
        
        | Parameter | Description |
        | --- | --- |
        | `value` | The value to fill the array with |
        | `start` (optional) | Start index (default = 0) |
        | `end` (optional) | End index (not included) |
        
        **1. Fill Entire Array**
        
        ```jsx
        let arr = [1,2,3,4];
        
        arr.fill(0);
        
        console.log(arr);
        // [0, 0, 0, 0]
        
        ```
        
        **2. Fill From a Starting Index**
        
        ```jsx
        let arr = [1,2,3,4];
        
        arr.fill(9,2);
        
        console.log(arr);
        // [1, 2, 9, 9]
        
        ```
        
        **3. Fill Between Start and End**
        
        ```jsx
        let arr = [1,2,3,4,5];
        
        arr.fill(7,1,4);
        
        console.log(arr);
        // [1, 7, 7, 7, 5]
        
        ```
        
        **4. Creating an Array with Default Values**
        
        ```jsx
        let arr =newArray(5).fill(0);
        
        console.log(arr);
        // [0, 0, 0, 0, 0]
        
        ```
        
        Very useful for initializing arrays.
        
        **5. Using `fill()` with Objects** 
        
        ```jsx
        let arr =newArray(3).fill({name:"Student" });
        
        arr[0].name ="Suman";
        
        console.log(arr);
        // All objects changed 😱
        
        ```
        
        Because all elements reference the **same object in memory**.