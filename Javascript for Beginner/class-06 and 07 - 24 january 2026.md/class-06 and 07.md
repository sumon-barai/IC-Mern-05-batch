# assets

- JavaScript code execution is line by line; it's called synchronous execution
- If I want to skip some code execution, then come into the control flow
- *Control flow is the term used to describe how JavaScript decides the order in which code is executed.*
- **Types of Control Flow**
    - Conditional Statements
        - if
        - if else
        - if elseif else
    - Switch Statement
    - Loops
    - Jump Statements
        - **`break`**: exits a loop or switch block
        - **`continue`**: skips the current iteration and moves to the next
- **Conditional Statements**
    
    **if else**
    
    - example-1
        
        ```jsx
        const isGoodStudent = true
        if (condition) {
          // condition সত্য হলে এই ব্লক চলবে
          console.log("he is good student")
        }  else {
          // শর্ত মিথ্যা হলে এটা চলবে
          console.log("he is bad student")
        }
        
        // if can only execute
        
        if (condition) {
          // condition সত্য হলে এই ব্লক চলবে
          console.log("he is good student")
        }
        
        // else can't execute without else
        else {
          // শর্ত মিথ্যা হলে এটা চলবে
          console.log("he is bad student")
        }
        
        ```
        
    - example-2 condition
        
        ```jsx
        let age = 18;
        
        if (age >= 18) {
          console.log("You are Eligible to use mobile phone");
        } else {
          console.log("You are NOT Eligible to use mobile phone");
        }
        
        or
        if (age >= 18) 
          console.log("You are Eligible to use mobile phone");
        else 
          console.log("You are NOT Eligible to use mobile phone");
        
        ```
        
    - example-3 multiple conditions
        
        ```jsx
        let score = 76;
        
        if (score >= 90) {
          console.log("Grade A");
        }
        
        if (score >= 80) {
          console.log("Grade B");
        }
        
        if (score >= 70) {
          console.log("Grade C");
        }
        
        if (score < 70) {
          console.log("Fail");
        }
        
        alternative
        
        if (score >= 90) {
          console.log("Grade A");
        } else if (score >= 80) {
          console.log("Grade B");
        } else if (score >= 70) {
          console.log("Grade C");
        } else if (score < 70) {
          console.log("Fail");
        }
        
        ```
        
    - Example 4: if else vs individual if
        
        ```jsx
        let x = 0;
        
        if (x === 0) {
          console.log(0);
        }
        
        if (x >= 0) {
          console.log("Greater than and equal to 0");
        }
        
        if (x <= 0) {
          console.log("Less than and equal to 0");
        }
        
        alternative
        let x = 0;
        
        if (x === 0) {
          console.log(0);
        } else if (x >= 0) {
          console.log("Greater than and equal to 0");
        } else if (x <= 0) {
          console.log("Less than and equal to 0");
        }
        ```
        
    - nested if-else block
        
        ```jsx
        const condition = false;
        const innerCondition = false;
        
        if (condition) {
          console.log("Outer if");
          if (innerCondition) {
            console.log("Inner if");
          } else {
            console.log("Inner else");
          }
        } else {
          console.log("Outer else");
        }
        ```
        
    
    **Switch case**
    
    - example-1
        
        ```jsx
        switch(expression) {
          case x:
            // code block
            break;
          case y:
            // code block
            break;
          default:
            // code block
        }
        
        let position = 1;
        
        switch (position) {
          case 0: console.log("Sunday");
          case 1: console.log("Monday");
          case 2: console.log("Tuesday");
          case 3: console.log("Wednesday");
          case 4: console.log("Thursday");
          case 5: console.log("Friday");
          case 6: console.log("Saturday");
        }
        
        // alwas use break and defalut statement
        // if code is multiple line use {} brackt
        
        switch (position) {
          case 0: console.log("Sunday"); break;
          case 1: console.log("Monday");break
          case 2: console.log("Tuesday");break
          case 3: console.log("Wednesday");break
          case 4: console.log("Thursday");break
          case 5: console.log("Friday");break
          case 6: console.log("Saturday");break;
          default: console.log("no condtion match"); // fallback code
        }
        
        // another example
        let name = "ChatGPT";
        
        switch (name) {
          case "Gemini":
            console.log("🚀 Answering Gemini");
            break;
          case "google":
            console.log("🚀 Answering google");
            break;
          case "ChatGPT":
             console.log("🚀 Answering ChatGPT");
            break;
          default:
            console.log("🤷‍♂️ Unknown: answer");
        }
        ```
        
    
    **Ternary Operator**
    
    - The ternary operator is a simplified conditional operator like `if` / `else`.
    - Syntax: `condition ? <expression if true> : <expression if false>`
    - **Syntax** condition1 ? value1: condition2 ? value2: condition3 ? value3: value4;
    - example-1
        
        ```jsx
        const age = 26;
        const beverage = age >= 21 ? "Beer" : "Juice";
        console.log(beverage); // "Beer"
        
        let PMarks = 50;
        let res = (PMarks > 39) ? "Pass" : "Fail";
        
        console.log(res);
        
        let day = 3;
        let greeting = (day === 1) ? 'Start of the week' :
                       (day === 2) ? 'Second day' :
                       (day === 3) ? 'Midweek' :
                       (day === 4) ? 'Almost weekend' :
                       'Weekend';
        
        console.log(greeting);
        ```
        
    
    **Advantages of Switch case**
    
    - jumb table in a particular condition
    - clean code in switch case
    - If you have a fixed value, then go forward to switch case