# class-2: 14 january 2026

- **Variable**
  - **Variable:** In programming, a **variable** is like a container that stores data with a name. So you can use and manipulate it later.
  - two parts of a variable
    - variable name or variable identifier
    - variable value or variable data
  - variable name: key of the name container
  - variable value: value of the name container
- **How to create a variable**
  - JavaScript variables can be **declared** in 4 ways:
  - Modern JavaScript
    - Using let
    - Using const
  - Older JavaScript
    - Using var
    - Automatically (Not Recommended)
  ```jsx
  var city; // create a store  with a indentifier or name
  var city, age, salary; // create multiple store with a indentifier or name
  city = "khulna"; // put into value in the stores
  console.log(city); // output or print the value
  ```
- **How to get output in js code**
  - innerHTML or innerText. (only browser runtime )
  - document.write(). (only browser runtime )
  - window.alert(). (only browser runtime )
  - console.log(). (node and browser runtime )
- **How to comment JS code**
  - single line comments
  - multiline comments
- **Variable Naming/identifier Rules**
  - Names can contain letters, digits, underscores, and dollar signs.
  - Names must begin with a letter.
  - Names can also begin with $ and \_ (but we will not use it in this tutorial).
  - **Names are case sensitive (y and Y are different variables).**
  - Reserved words (like JavaScript keywords) cannot be used as names.
  - variable name best practice
    - use camelcase
    - human-readable
    - The name should be match the use cause
