/*
====================================================
EXERCISE 02: COMMAND LINE ARGUMENTS
====================================================

CONCEPT TESTED:
- process object
- process.argv
- CLI-based input in Node.js

THEORY:
Node.js provides a global object called `process`
which contains information about the currently
running Node.js process.

`process.argv` is an array that stores command-line arguments.

Structure:
process.argv[0] -> path to node executable
process.argv[1] -> path to current JS file
process.argv[2+] -> user-provided arguments

INTERVIEW NOTE:
Q: How do you take input from terminal in Node.js?
A: Using process.argv or readline module.

PROBLEM STATEMENT:
Create a Node.js program that accepts a user's name
from the command line and prints a greeting.

WHAT YOU NEED TO IMPLEMENT:
- Read input from process.argv
- Print a dynamic message using template literals

EXPECTED OUTPUT:
node 02-command-line-args.js Sumit
Hello, Sumit! Welcome to Node.js.

HOW TO RUN:
node 02-command-line-args.js <name>
====================================================
*/

// ===== SOLUTION CODE =====
const name = process.argv[2];

console.log(`Hello, ${name}! Welcome to Node.js.`);
