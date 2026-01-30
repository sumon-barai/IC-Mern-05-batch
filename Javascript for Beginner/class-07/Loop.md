# assets

- **Loop:** loop means one or more same tasks are repeatedly performed.
- **Do not write the same code repeatedly**
- We discussed 3 types of loops primarily
    - **For loop:** when the iteration is fixed. example 10 time iteration
    - **while loop:** when the iteration  is not fixed, for example, I am not sure how many iterations occur
    - **do while loop:** when the iteration is not fixed, but one iteration must be done
- iteration - one loop is done is one iteration
- For Loop
    
    ```jsx
    for (initialization; condition; update) {
      // code block to be executed
    }
    
    for(let count=1;count <=5;count++){
    	console.log("loop" + i)
    }
    
    // explain 
    
    if(i % 2 == 0 ){
    
    }
    
    // problem : sum of 1 to 50 number
    // problem : sum of even 1 to 50 number
    // problem : sum of odd 1 to 50 number
    
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
      if (i % 2 === 0) {
        // console.log("i", i)
        // sum = sum + i;
        sum += i;
      }
    }
    console.log("Sum is", sum);
    
    // nested loop: one loop is inter the anohter loop is called nested loop
    
    // Nested Loop
    for (let i = 1; i <= 3; i++) {
      for (let j = 1; j <= 3; j++) {
        console.log("first loop", i, "second loop", j);
      }
    }
    
    ```
    
- Break and continue
    - **break :** break stops the looping (stops all iteration)  when JS sees the break statement
    - **continue:** continue stops the current iteration when JS sees the continue statement
    
    ```jsx
    // exmaple -01 break
    
    for (let i = 1; i <= 5; i++) {
      if (i == 3) {
        break;
      }
      console.log(i);
    }
    
    // short hand
    
    for (let i = 1; i <= 5; i++) {
      if (i == 3) break;
      console.log(i);
    }
    
    // example -02 Continue
    for (let i = 1; i <= 5; i++) {
      if (i == 3) continue;
      console.log(i);
    }
    ```
    
- **while loop**
    
    ```jsx
    // synax
    while (condition) {
      // Code block to be executed as long as the condition is true
    }
    
    let count = 0;
    while (count < 5) {
      console.log("The current count is: " + count);
      count++; // Increment count to eventually make the condition false
    }
    
    console.log("Loop finished");
    ```
    
- **do while loop**
    
    ```jsx
    // syntax
    
    do {
      // code block to be executed
    } while (condition);
    
    // example -01
    let num = 1;
    do {
      console.log(num);
      num++;
    } while (num <= 5);
    
    ```
    
- **infinite loop**
    - An **infinite loop** is a loop that **never ends**.
        
        **When infinite loops are created:**
        
        - Condition always evaluates to true
        - The loop variable is not updated
        - Wrong comparison or assignment instead of comparison