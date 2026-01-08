/*
====================================================
EXERCISE 11: CALLBACK VS ASYNC FILE SYSTEM
====================================================

CONCEPT TESTED:
- Asynchronous programming
- fs.readFile (callback-based)
- Non-blocking execution
- Event loop behavior

THEORY:
Node.js is non-blocking by default.
Most I/O operations use callbacks to avoid blocking the event loop.

Callback-based async:
- Function is passed as an argument
- Executed after the async task completes

Downside:
- Nested callbacks can lead to "callback hell"

INTERVIEW NOTE:
Q: Why does Node.js prefer async I/O?
A: To keep the event loop free and scalable.

PROBLEM STATEMENT:
Create a Node.js program that:
1. Reads a file asynchronously using callbacks
2. Prints file content
3. Prints a message showing non-blocking behavior

WHAT YOU NEED TO IMPLEMENT:
- fs.readFile with callback
- Observe execution order

EXPECTED OUTPUT (order matters):
This prints first
File content: Hello Async
This prints last

HOW TO RUN:
node 11-callback-vs-async-fs.js
====================================================
*/

const fs = require("fs");

// ===== ASYNC FILE READ =====
fs.readFile("async.txt", "utf-8", (err, data) => {
  if (err) {
    console.error("Error reading file");
    return;
  }
  console.log("File content:", data);
});

console.log("This prints first");
console.log("This prints last");
