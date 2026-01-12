/*
====================================================
EXERCISE 17: ERROR HANDLING IN ASYNC & STREAMS
====================================================

CONCEPT TESTED:
- Error handling in async/await
- Error events in streams
- Defensive Node.js coding

THEORY:
Errors in Node.js can occur in:
1. Async functions (handled using try/catch)
2. Streams (handled using 'error' event)

If stream errors are not handled, the process can crash.

INTERVIEW NOTE:
Q: How do you handle errors in streams?
A: By listening to the 'error' event on the stream.

PROBLEM STATEMENT:
Create a Node.js program that:
1. Attempts to read a non-existent file using async/await
2. Handles stream errors gracefully

WHAT YOU NEED TO IMPLEMENT:
- try/catch for async errors
- 'error' event for stream errors

EXPECTED OUTPUT:
Async error handled
Stream error handled

HOW TO RUN:
node 17-error-handling-async-streams.js
====================================================
*/

const fs = require("fs");

// ===== ASYNC ERROR HANDLING =====
async function readFileSafe() {
  try {
    await fs.promises.readFile("missing.txt", "utf-8");
  } catch (error) {
    console.log("Async error handled");
  }
}

readFileSafe();

// ===== STREAM ERROR HANDLING =====
const stream = fs.createReadStream("missing.txt");

stream.on("error", () => {
  console.log("Stream error handled");
});
