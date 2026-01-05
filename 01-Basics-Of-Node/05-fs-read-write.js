/*
====================================================
EXERCISE 05: FILE SYSTEM (FS) – READ & WRITE FILES
====================================================

CONCEPT TESTED:
- fs core module
- Reading and writing files
- Synchronous vs Asynchronous operations

THEORY:
Node.js provides the `fs` (File System) module to interact
with files and directories on the system.

There are two major approaches:
1. Synchronous (blocking)  -> fs.readFileSync, fs.writeFileSync
2. Asynchronous (non-blocking) -> fs.readFile, fs.writeFile

Blocking operations pause the execution until completed,
while non-blocking operations allow Node.js to handle other tasks.

INTERVIEW NOTE:
Q: Why should async fs methods be preferred?
A: Because they do not block the event loop.

PROBLEM STATEMENT:
Create a Node.js script that:
1. Writes text to a file
2. Reads the same file and prints its content

WHAT YOU NEED TO IMPLEMENT:
- Use fs module
- Write data to a file
- Read data from the file

EXPECTED OUTPUT:
File written successfully.
File content: Hello from Node File System!

HOW TO RUN:
node 05-fs-read-write.js
====================================================
*/

const fs = require("fs");
const fileName = "sample.txt";

// ===== WRITE FILE =====
fs.writeFileSync(fileName, "Hello from Node File System!");
console.log("File written successfully.");

// ===== READ FILE =====
const content = fs.readFileSync(fileName, "utf-8");
console.log("File content:", content);
