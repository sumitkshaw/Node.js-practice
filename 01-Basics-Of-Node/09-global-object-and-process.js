/*
====================================================
EXERCISE 09: GLOBAL OBJECT & PROCESS LIFECYCLE
====================================================

CONCEPT TESTED:
- Global object in Node.js
- __dirname, __filename
- process object
- Process lifecycle

THEORY:
Unlike browsers (where `window` is global),
Node.js provides a `global` object.

Some important global properties:
- __dirname  → directory of current file
- __filename → file path of current file
- process    → information about the running Node process

The process object helps in:
- Reading environment variables
- Exiting the process
- Listening to lifecycle events

INTERVIEW NOTE:
Q: Is `window` available in Node.js?
A: No, Node.js uses `global` instead.

PROBLEM STATEMENT:
Create a Node.js script that:
1. Prints directory and file paths
2. Prints process ID and Node version

WHAT YOU NEED TO IMPLEMENT:
- Use global variables
- Access process metadata

EXPECTED OUTPUT (example):
Current directory: /project
Current file: /project/09-global-object-and-process.js
Process ID: 12345
Node Version: v18.x.x

HOW TO RUN:
node 09-global-object-and-process.js
====================================================
*/

// ===== GLOBAL VARIABLES =====
console.log("Current directory:", __dirname);
console.log("Current file:", __filename);

// ===== PROCESS INFO =====
console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
