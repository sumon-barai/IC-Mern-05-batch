# class-4/5 Operators & Expressions

- **Operators, Operands, Expressions**
  - **Operators:** Operator হলো **চিহ্ন বা কীওয়ার্ড** যা কোনো কাজ সম্পন্ন করে।

  ```tsx
  let x = 10 + 5;
  এখানে + হলো operator, যা যোগ করার কাজ করছে।
  ```

  - **Operands:** Operand হলো সেই **ভ্যালু বা ভ্যারিয়েবল** যাদের উপর operator কাজ করে।

  ```tsx
  10 + 5
  এখানে 10 এবং 5 হলো operands।
  অর্থাৎ, + operator, আর 10 এবং 5 হলো operands।
  ```

  - **Expression: Expression** হলো **Operands + Operators এর সমন্বয়**, যা একটি ভ্যালু রিটার্ন করে।

  ```tsx
  let result = 10 + 5 * 2;

  এখানে পুরো 10 + 5 * 2 অংশটা হলো expression।
  এটি ক্যালকুলেট হয়ে 20 রিটার্ন করবে।
  ```

- **Different Types of Expressions**
  There are 2 types of expression
  - assignment expression
    - = symbol
  - evaluating expression
    - Arithmetic Expression
    - Comparison Expression
    - String Expression
    - Logical Expression
    - Function Expressions
    - etc
- **Different Types of Operators**
  - Arithmetic Operators

    ```tsx
     +        // Addition or concate
     -        //Subtraction
     *        // Multiplication
     **       // Exponentiation
     /        //Division
     %        // Modulus (Remainder)
     ++       //Increment
     --       // Decrement


     ======================
     post(পরে) increment  == count return hobe then pore increment hobe
     let count = 5
     console.log(count++) // output  5
     console.log(count)  //output 6

      pre (আগে) increment  == count increment hobe then pore return hobe
     let count = 5
     console.log(++count) // output  6
     console.log(count)  //output 6

     ==================================

      post decrement  == count return hobe then pore decrement hobe
     let count = 5
     console.log(count--) // output  5
     console.log(count)  //output 6

      pre decrement  == count decrement hobe then pore return hobe
     let count = 5
     console.log(--count) // output  6
     console.log(count)  //output 6
    ```

  - Assignment Operators

    ```tsx
    let x = 10; // assignemnt operator

    // short cut syntax
    ```

    ![image.png](./class-4-5%20Operators%20&%20Expressions/image.png)

  - Comparison Operators
    - **Comparison operation always returns a Boolean value**
    - comparison
      ![image.png](./class-4-5%20Operators%20&%20Expressions/image%201.png)
    - **Type Conversion** বা **Type Casting**
      এটার আবার দুই রকম আছে:
      1. **Type Conversion (Explicit / Type Casting)**
         - যখন প্রোগ্রামার নিজে হাতে টাইপ পরিবর্তন করে।
         - যেমন:
           ```jsx
           let num = "123";
           let converted = Number(num); // "123" → 123
           ```
      2. **Type Coercion (Implicit / Automatic Conversion)** ✅ - যখন JavaScript engine নিজে থেকেই টাইপ পরিবর্তন করে। - উদাহরণ:
         `jsx
console.log("5" + 2); // "52"  (number → string এ convert হয়ে গেছে)
console.log("5" - 2); // 3     (string → number এ convert হয়েছে)
`
         👉 মানে, **"automatic type change"** কে মূলত **Type Coercion** বলা হয়।
  - Logical Operators
    - && —→ logical and
    - || ——> logical or
    - ! ==⇒ logical not
    - ?? ==⇒ Nullish Coalescing

    ```jsx

    // &&  ( logical and )
    Both **Operand** are true then output or result will be true
    if left side will true then output return will be right side

    console.log(false && false); // false
    console.log(true && false);  // false
    console.log(true && true);   // true
    console.log(false && true);  // false

    console.log("Dhaka" && "Khulna"); // Khulna
    // here js converted to cow is boolean value and then compare

    4 > 5 && 4 === 6

    =====================================
    ||    ——> logical or
    any **Operands** are true then output or result will be true
    if left side will false then output return will be right side

    console.log(false || false); // false
    console.log(true || false);  // true
    console.log(true || true);   // true
    console.log(false || true);  // true

    console.log("Dhaka" && "Khulna"); // Dhaka
    4 > 5 && 4 === 6

    =================================
    !   ==⇒   logical not

    it use to toggle and converted to boolean value
    console.log(!"Dhaka"); // false

    =================================
    ??    ==⇒  Nullish Coalescing

    - left operend is null or undefined then then return right side operand
    console.log("Dhaka" ?? "Khulna");  // Dhaka
    console.log(false ?? "Khulna");  // false
    console.log(0 ?? "Khulna");  // 0
    ```

    - truthy or falsy value
      - **Falsy Values:**
        - `false` (the boolean primitive)
        - `0` (the number zero)
        - - `0` (negative zero)
        - `0n` (BigInt zero)
        - `""` (an empty string)
        - `null`
        - `undefined`
        - `NaN` (Not a Number)
      - **Truthy Values:**
        - `true`
        - Any non-zero number (e.g., `1`, `1`, `3.14`)
        - Any non-empty string (e.g., `"hello"`, `"false"`)
        - Arrays (including empty arrays `[]`)
        - Objects (including empty objects `{}`)
        - Functions

  - Conditional Ternary Operator
    ```jsx
    // condition ? "value1": "value2"
    true ? "value1" : "value2";
    let age = 20;
    age >= 50 ? "big" : "small";
    ```
  - Bitwise Operators
  - Relational Operators
    - in use in object or loop

- Grouping and Precedence
  - **Precedence (অগ্রাধিকার)** মানে হলো, JavaScript (বা অন্য কোনো ভাষা) যখন এক লাইনে একাধিক operator দেখে, তখন কোন operator আগে execute হবে সেই নিয়ম।
  -
  ### Some Operator Precedence list:
  1. `()` → Parentheses (সবচেয়ে আগে)
  2. `*` → Exponentiation
  3. `/ %` → Multiplication, Division, Modulus
  4. `+ -` → Addition, Subtraction
  5. `< > <= >=` → Comparison
  6. `== != === !==` → Equality
  7. `&&` → Logical AND
  8. `||` → Logical OR
  9. `=` → Assignment (সবচেয়ে শেষে)
  ```jsx
  let result = 2 + 3 * 4;
  console.log(result);
  console.log(4 + 5 * 2); // 14, কারণ * আগে execute হবে
  console.log((4 + 5) * 2); // 18, কারণ () precedence বাড়িয়ে দেয়
  ```
- special type operator
  - typeof Operator is only used for primitive types
  - instanceof Operator is only used for non-primitive types
  ```jsx
  let arr = [1, 2, 3];
  console.log(arr instanceof Array); // true
  console.log(arr instanceof Object);
  ```
