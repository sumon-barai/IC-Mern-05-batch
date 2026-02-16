# assets

- **Closures:** A **closure** is created when a **function remembers variables** from its **outer scope ( Lexical Scope )**, even after that outer function has finished execution.
- A closure gives you access to an outer function’s variables from an inner function.
- Inner function can access any variable in the outer function
- Outer function can’t access any variable in the Inner function

```jsx
function outer() {
  let name = "Suman"; // variable in outer function

  function inner() {
    console.log("Hello " + name); // inner can use outer variable
  }

  return inner; // return the inner function
}

const greet = outer(); // outer() finishes, but inner still remembers 'name'
greet(); // Output: Hello Suman

```

- **closures with private data**
    
    ```jsx
    function counter() {
      let count = 0; // private variable
    
      return function() {
        count++;
        console.log(count);
      };
    }
    
    const add = counter();
    
    add(); // 1
    add(); // 2
    add(); // 3
    
    ```
    
- **Closure Use Case**
    - Keep data private and secure (like count above)
    - Remember the state between function calls
    - Useful in event handlers, callbacks, and functional programming
- **Bank Account example**
    
    ```jsx
    function createBankAccount(initialBalance) {
        let balance = initialBalance;
    
        return {
            deposit: (amount) => {
                balance = balance + amount;
                console.log("Deposited ", amount, " Current Balance ", balance);
            },
    
            withdraw: (amount) => {
                if (amount > balance) {
                    console.warn("Insifficient Fund");
                } else {
                    balance = balance - amount;
                    console.log("Withdrawn ", amount, " Current Balance ", balance);
                }
            },
    
            checkBalance: () => console.log("Current Balance", balance),
        };
    }
    
    const sumonAccount = createBankAccount(100);
    
    console.log(sumonAccount)
    
    console.log(sumonAccount.deposit(300)); // 400
    
    ```
    
- **Closure with event handler**
    
    ```jsx
    // Closure in Event handler
    
    function setupButton() {
        let clickCount = 0;
    
        document.getElementById("myButton").addEventListener("click", function() {
            clickCount++;
            console.log(`Button clicked ${clickCount} times`);
        });
    }
    
    setupButton();
    ```