/*
====================================================
EXERCISE 14: CREATE DIRECTORIES & FILES DYNAMICALLY
====================================================

CONCEPT TESTED:
- fs.mkdir
- fs.writeFile
- Directory management
- Async file system operations

THEORY:
Backend systems often need to:
- Create folders dynamically
- Generate files (logs, reports, uploads)

Node.js allows this using fs module methods.

Using `{ recursive: true }` ensures
parent directories are created if missing.

INTERVIEW NOTE:
Q: How do you safely create directories in Node.js?
A: Using fs.mkdir with recursive option.

PROBLEM STATEMENT:
Write a Node.js program that:
1. Creates a directory
2. Creates a file inside it
3. Writes data to the file

WHAT YOU NEED TO IMPLEMENT:
- fs.mkdir
- fs.writeFile
- async/await usage

EXPECTED OUTPUT:
Directory created
File written successfully

HOW TO RUN:
node 14-create-directories-and-files.js
====================================================
*/

const fs = require("fs").promises;

async function createFiles() {
  try {
    await fs.mkdir("logs", { recursive: true });
    console.log("Directory created");

    await fs.writeFile("logs/app.log", "Log initialized");
    console.log("File written successfully");
  } catch (err) {
    console.error("Error:", err);
  }
}

createFiles();
