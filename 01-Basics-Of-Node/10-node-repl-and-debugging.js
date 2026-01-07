/*
====================================================
EXERCISE 10: NODE REPL & DEBUGGING BASICS
====================================================

CONCEPT TESTED:
- Node REPL
- Debugging using console
- Understanding runtime execution

THEORY:
REPL stands for:
Read → Eval → Print → Loop

Node REPL allows:
- Quick testing of JavaScript code
- Inspecting variables
- Debugging logic interactively

Debugging in Node.js often starts with:
- console.log()
- console.error()
- console.time()

INTERVIEW NOTE:
Q: How do you debug Node.js applications?
A: Using console logs, Node REPL, or debuggers like VS Code.

PROBLEM STATEMENT:
Write a Node.js program that:
1. Demonstrates console timing
2. Prints a calculated value

WHAT YOU NEED TO IMPLEMENT:
- Use console.time()
- Use console.timeEnd()

EXPECTED OUTPUT:
ExecutionTime: Xms
Result: 100

HOW TO RUN:
node 10-node-repl-and-debugging.js
====================================================
*/

console.time("ExecutionTime");

// ===== SAMPLE LOGIC =====
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}

console.timeEnd("ExecutionTime");
console.log("Result:", sum);
