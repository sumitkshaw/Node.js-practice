/*
====================================================
EXERCISE 04: PATH & OS CORE MODULES
====================================================

CONCEPT TESTED:
- Node.js core modules
- path module
- os module
- Platform-independent code

THEORY:
Node.js provides built-in core modules that do not
need installation.

1. path module:
   Helps in handling file and directory paths
   in a platform-independent way.

2. os module:
   Provides information about the operating system,
   such as CPU, memory, platform, and architecture.

Using these modules avoids hardcoding system-specific logic.

INTERVIEW NOTE:
Q: Why should we use path.join instead of string paths?
A: It ensures compatibility across different OS platforms.

PROBLEM STATEMENT:
Write a Node.js script that:
- Prints the current file path
- Prints system platform and total memory

WHAT YOU NEED TO IMPLEMENT:
- Use path and os modules
- Read system-level information

EXPECTED OUTPUT (example):
Current file path: C:\project\04-path-and-os-module.js
Platform: win32
Total Memory: XXXXXXXX

HOW TO RUN:
node 04-path-and-os-module.js
====================================================
*/

// ===== CORE MODULE IMPORTS =====
const path = require("path");
const os = require("os");

// ===== PATH MODULE =====
const currentFilePath = path.join(__dirname, "04-path-and-os-module.js");

// ===== OS MODULE =====
const platform = os.platform();
const totalMemory = os.totalmem();

// ===== OUTPUT =====
console.log("Current file path:", currentFilePath);
console.log("Platform:", platform);
console.log("Total Memory:", totalMemory);
