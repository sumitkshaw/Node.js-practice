/*
====================================================
EXERCISE 13: CALLBACK vs PROMISE vs ASYNC/AWAIT
====================================================

CONCEPT TESTED:
- Comparison of async patterns
- Callback-based async
- Promise-based async
- async/await
- Readability & maintainability

THEORY:
Node.js supports multiple async patterns:

1. Callbacks
   - Oldest pattern
   - Can cause callback hell

2. Promises
   - Better chaining
   - Easier error handling

3. async/await
   - Built on Promises
   - Most readable and preferred in production

INTERVIEW NOTE:
Q: Which async pattern is best and why?
A: async/await because it improves readability and error handling.

PROBLEM STATEMENT:
Read the same file using:
1. Callback
2. Promise
3. async/await

WHAT YOU NEED TO IMPLEMENT:
- Demonstrate all three approaches

EXPECTED OUTPUT:
Callback data: Hello Node
Promise data: Hello Node
Async/Await data: Hello Node

HOW TO RUN:
node 13-callback-vs-promise-vs-async.js
====================================================
*/

const fs = require("fs");

// ===== CALLBACK =====
fs.readFile("compare.txt", "utf-8", (err, data) => {
  if (!err) {
    console.log("Callback data:", data);
  }
});

// ===== PROMISE =====
fs.promises
  .readFile("compare.txt", "utf-8")
  .then(data => console.log("Promise data:", data));

// ===== ASYNC/AWAIT =====
async function readAsync() {
  const data = await fs.promises.readFile("compare.txt", "utf-8");
  console.log("Async/Await data:", data);
}

readAsync();
