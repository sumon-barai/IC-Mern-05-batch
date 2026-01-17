# class-3 variable in memory

- **value assignments**
    - In JavaScript, the equal sign (`=`) is an "assignment" operator, not an "equal to" operator.
    - The "equal to" operator is written like `==` in JavaScript.
    - **After the declaration, the variable has no value (technically, it is undefined).**
    
    ```jsx
    // Creating a variable in JavaScript is called declaring a variable.
    let carName;    // variable declaration
    const carName;  // variable declaration
    var carName     // variable declaration
    
    //After the declaration, the variable has no value 
    //(technically it is undefined).
    
    // To assign a value to the variable, use the equal sign:
    carName = "Volvo"; //variable assignment
    
    //You can also assign a value to the variable when you declare it:
    
    let carName = "Volvo";
    
    ```
    
    - example
        
        ![image.png](class-3%20variable%20in%20memory/image.png)
        
- **Data Types**
    - all data types
        - JavaScript has 8 data types
        
        ![image.png](class-3%20variable%20in%20memory/image%201.png)
        
        - A JavaScript variable can hold any type of data.
        
        ```jsx
        // Numbers:
        let length = 16;
        let weight = 7.5;
        
        // Strings:
        let color = "Yellow";
        let lastName = "Johnson";
        let firstName = `sumon`;
        
        // Booleans
        let x = true;
        let y = false;
        
        // Object:
        const person = {firstName:"John", lastName:"Doe"};
        
        // Array object:
        const cars = ["Saab", "Volvo", "BMW"];
        
        // undefined
        const val = undefined
        
        // null
        const val = null
        ```
        
    - category of data type
        - There are two categories of JavaScript data types
            - primitive data types
            - non primitive data types**/reference data types**/object data types
            - code
                
                ```jsx
                - **Primitive Data Types:**
                  - `String` - Text values ("Hello")
                  - `Number` - Numeric values (25, 3.14)
                  - `Boolean` - True/False (true, false)
                  - `Undefined` - A variable declared but not assigned (let x;)
                  - `Null` - Represents "nothing" (let y = null;)
                  - `BigInt` - Large numbers (BigInt(12345678901234567890))
                  - `Symbol` - Unique identifiers (Symbol("id"))
                
                - **Non-Primitive (Reference) Data Types:**
                  - `Object` - Collection of key-value pairs
                  - `Array` - Ordered list of values
                  - `Function` - Code that can be executed
                ```
                
        - Every non primitive data type is built on a primitive data type
    - Type checking
        - type of operator
        - instanceof()
- **Difference between var, let, and const**
    - var: function scoped, can be redeclared and reassigned with the same name
    - let: block-scoped, can be reassigned, not redeclared with the same name
    - const: block-scoped, cannot be redeclared or reassigned
- **stack and heap memory**
    - copy of variable