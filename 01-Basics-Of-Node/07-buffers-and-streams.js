/*
====================================================
EXERCISE 07: BUFFERS & STREAMS (BASICS)
====================================================

CONCEPT TESTED:
- Buffer
- Streams (conceptual intro)
- Handling binary data in Node.js

THEORY:
Node.js works with binary data using Buffers.
A Buffer represents a chunk of memory allocated
outside the V8 heap.

Streams are used to handle large data efficiently
by processing it in chunks instead of loading
everything into memory at once.

Buffers are the foundation on which Streams work.

INTERVIEW NOTE:
Q: Why are streams preferred for large files?
A: They reduce memory usage by processing data in chunks.

PROBLEM STATEMENT:
Create a Node.js program that:
1. Creates a buffer from a string
2. Prints its content and length

WHAT YOU NEED TO IMPLEMENT:
- Use Buffer.from()
- Display buffer data

EXPECTED OUTPUT:
Buffer content: <Buffer ...>
Buffer as string: Node Streams
Buffer length: 12

HOW TO RUN:
node 07-buffers-and-streams.js
====================================================
*/

// ===== CREATE BUFFER =====
const buffer = Buffer.from("Node Streams");

// ===== OUTPUT =====
console.log("Buffer content:", buffer);
console.log("Buffer as string:", buffer.toString());
console.log("Buffer length:", buffer.length);
