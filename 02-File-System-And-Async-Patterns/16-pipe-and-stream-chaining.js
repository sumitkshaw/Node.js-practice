/*
====================================================
EXERCISE 16: PIPE & STREAM CHAINING
====================================================

CONCEPT TESTED:
- stream.pipe()
- Stream chaining
- Cleaner stream handling

THEORY:
The pipe() method connects a readable stream
directly to a writable stream.

Advantages:
- Less code
- Automatic backpressure handling
- Cleaner and safer

Pipe is preferred over manual data handling
for most stream operations.

INTERVIEW NOTE:
Q: What is backpressure in Node.js?
A: When a writable stream cannot handle data
   as fast as it is read, pipe manages the flow.

PROBLEM STATEMENT:
Create a Node.js program that:
1. Copies data from one file to another
2. Uses pipe() instead of manual stream handling

WHAT YOU NEED TO IMPLEMENT:
- createReadStream
- createWriteStream
- pipe()

EXPECTED OUTPUT:
File copied using pipe

HOW TO RUN:
node 16-pipe-and-stream-chaining.js
====================================================
*/

const fs = require("fs");

// ===== PIPE STREAMS =====
const readStream = fs.createReadStream("source.txt");
const writeStream = fs.createWriteStream("destination.txt");

readStream.pipe(writeStream);

writeStream.on("finish", () => {
  console.log("File copied using pipe");
});
