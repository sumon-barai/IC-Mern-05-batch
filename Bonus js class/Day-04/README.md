# Day-04 Javascript By sumon barai

## Operators & Expressions

### Operators, Operands, Expressions

- Operators: Operator হলো চিহ্ন বা কীওয়ার্ড যা কোনো কাজ সম্পন্ন করে।

  50 + 10

- Operands: Operand হলো সেই ভ্যালু বা ভ্যারিয়েবল যাদের উপর operator কাজ করে।

  50 + 10

- Expression: Expression হলো Operands + Operators এর সমন্বয়, যা একটি ভ্যালু রিটার্ন করে।

  50 + 10 +20
  60

## Different Types of Operators

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators
- Conditional / Ternary Operator
- Bitwise Operators
- Relational Operators
- special type operator

## Arithmetic Operators

// + Addition or concat  
 // - Subtraction  
 // \* Multiplication  
 // \*\* Exponentiation  
 // / Division  
 // % Modulus  
 // ++ Increment  
 // -- Decrement

- post Increment
- preIncrement

## Assignment Operators

- let x = 60
- x+=20 //short cut
- x = x+20

## Comparison Operators

- Comparison operation always returns a Boolean value

  - true
  - false

- == equal to
- === equal value and equal type
- != not equal
- !== not equal value and not equal type
- > greater then >
- < less then
- > = greater then equal to
- <= less then equal to

## Type Conversion** বা Type Casting**

    এটার আবার দুই রকম আছে:

    1. **Type Conversion (Explicit / Type Casting)**
        - যখন প্রোগ্রামার নিজে হাতে টাইপ পরিবর্তন করে।
        - যেমন:

            ```js
            let num = "123";
            let converted = Number(num); // "123" → 123

            ```

    2. **Type Coercion (Implicit / Automatic Conversion)** ✅
        - যখন JavaScript নিজে থেকেই টাইপ পরিবর্তন করে।
        - উদাহরণ:

            ```js
            console.log("5" + 2);  // "52"  (number → string এ convert হয়ে গেছে)
            console.log("5" - 2);  // 3     (string → number এ convert হয়েছে)

            ```


    মানে, **"automatic type change"** কে মূলত **Type Coercion** বলা হয়।
