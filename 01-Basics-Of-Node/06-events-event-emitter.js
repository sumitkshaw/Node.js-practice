/*
====================================================
EXERCISE 06: EVENTS & EVENT EMITTER
====================================================

CONCEPT TESTED:
- events module
- Event-driven architecture
- EventEmitter class

THEORY:
Node.js follows an event-driven, non-blocking architecture.
The `events` module allows objects to communicate
through events.

EventEmitter:
- emit() → triggers an event
- on() → listens to an event

This pattern is heavily used internally by Node.js
(e.g., streams, HTTP server).

INTERVIEW NOTE:
Q: What is EventEmitter in Node.js?
A: A class used to handle and respond to custom events.

PROBLEM STATEMENT:
Create a Node.js program that:
1. Defines a custom event
2. Listens to the event
3. Emits the event

WHAT YOU NEED TO IMPLEMENT:
- Create an EventEmitter instance
- Register an event listener
- Emit the event

EXPECTED OUTPUT:
User registered successfully!

HOW TO RUN:
node 06-events-event-emitter.js
====================================================
*/

const EventEmitter = require("events");

// ===== CREATE EMITTER =====
const emitter = new EventEmitter();

// ===== REGISTER EVENT LISTENER =====
emitter.on("userRegistered", () => {
  console.log("User registered successfully!");
});

// ===== EMIT EVENT =====
emitter.emit("userRegistered");
