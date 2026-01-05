/*
====================================================
EXERCISE 03: NODE.JS MODULE SYSTEM
====================================================

CONCEPT TESTED:
- CommonJS module system
- require()
- module.exports
- Code reusability in Node.js

THEORY:
Node.js follows the CommonJS module system.
Each file in Node.js is treated as a separate module.

To share functionality between files:
- `module.exports` is used to export data/functions
- `require()` is used to import them

This helps in:
- Separation of concerns
- Cleaner and maintainable code
- Reusability across the application

INTERVIEW NOTE:
Q: How does Node.js handle modules?
A: Using CommonJS where each file is its own module
   and uses require & module.exports.

PROBLEM STATEMENT:
Create a utility module that exports a function to add two numbers,
and import it into the main file to use it.

WHAT YOU NEED TO IMPLEMENT:
- Create and use a module
- Import it using require()
- Call the exported function

EXPECTED OUTPUT:
Sum is: 15

HOW TO RUN:
node 03-node-modules.js
====================================================
*/

/*
NOTE:
Normally this example would be split into 2 files:
- mathUtils.js
- index.js

For learning & interview clarity, we simulate it here.
*/

// ===== MODULE SIMULATION =====
const mathUtils = {
  add: (a, b) => a + b
};

// ===== MAIN CODE =====
const result = mathUtils.add(7, 8);
console.log("Sum is:", result);
