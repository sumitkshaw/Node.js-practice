/*
====================================================
EXERCISE 08: EVENT LOOP – TIMERS & MICROTASKS
====================================================

CONCEPT TESTED:
- Event loop phases
- setTimeout
- setImmediate
- process.nextTick

THEORY:
Node.js executes code using an event loop.
Tasks are processed in different queues.

Priority order:
1. process.nextTick (highest priority – microtask)
2. Promises (microtask queue)
3. Timers (setTimeout)
4. setImmediate (check phase)

Misusing nextTick can starve the event loop.

INTERVIEW NOTE:
Q: Difference between setImmediate and setTimeout?
A: setImmediate runs in the check phase, setTimeout
   runs in the timer phase.

PROBLEM STATEMENT:
Write a Node.js program that demonstrates
execution order of async callbacks.

WHAT YOU NEED TO IMPLEMENT:
- Use setTimeout
- Use setImmediate
- Use process.nextTick

EXPECTED OUTPUT (order may vary slightly):
Start
End
nextTick
setTimeout
setImmediate

HOW TO RUN:
node 08-event-loop-timers.js
====================================================
*/

console.log("Start");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

process.nextTick(() => {
  console.log("nextTick");
});

console.log("End");
