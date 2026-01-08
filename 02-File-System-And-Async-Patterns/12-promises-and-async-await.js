/*
====================================================
EXERCISE 12: PROMISES & ASYNC/AWAIT
====================================================

CONCEPT TESTED:
- Promises
- async/await
- Cleaner async code
- Error handling basics

THEORY:
Promises solve the readability problem of callbacks.
A Promise has three states:
- Pending
- Fulfilled
- Rejected

async/await is syntactic sugar over Promises
that allows writing async code in a synchronous style.

INTERVIEW NOTE:
Q: Why is async/await preferred over callbacks?
A: Better readability and easier error handling.

PROBLEM STATEMENT:
Create a Node.js program that:
1. Reads a file using Promises
2. Uses async/await to print its content

WHAT YOU NEED TO IMPLEMENT:
- fs.promises
- async function
- await keyword

EXPECTED OUTPUT:
File content: Hello Async Await

HOW TO RUN:
node 12-promises-and-async-await.js
====================================================
*/

const fs = require("fs").promises;

async function readFileAsync() {
  try {
    const data = await fs.readFile("promise.txt", "utf-8");
    console.log("File content:", data);
  } catch (error) {
    console.error("Error reading file");
  }
}

readFileAsync();
