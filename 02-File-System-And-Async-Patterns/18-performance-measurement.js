/*
====================================================
EXERCISE 18: PERFORMANCE MEASUREMENT
====================================================

CONCEPT TESTED:
- Performance monitoring
- console.time
- process.hrtime

THEORY:
Node.js provides tools to measure execution time.

1. console.time / console.timeEnd
   - Simple timing
2. process.hrtime
   - High-resolution time (nanoseconds)

Used in:
- Performance optimization
- Benchmarking
- Debugging slow code

INTERVIEW NOTE:
Q: How do you measure performance in Node.js?
A: Using console.time or process.hrtime.

PROBLEM STATEMENT:
Create a Node.js program that:
1. Measures loop execution time using console.time
2. Measures execution using process.hrtime

WHAT YOU NEED TO IMPLEMENT:
- console.time
- process.hrtime

EXPECTED OUTPUT:
LoopTime: Xms
High resolution time: Xns

HOW TO RUN:
node 18-performance-measurement.js
====================================================
*/

console.time("LoopTime");

for (let i = 0; i < 1e6; i++) {}

console.timeEnd("LoopTime");

// ===== HIGH RESOLUTION TIME =====
const start = process.hrtime();

for (let i = 0; i < 1e6; i++) {}

const end = process.hrtime(start);
console.log(
  `High resolution time: ${end[0]}s ${end[1]}ns`
);
