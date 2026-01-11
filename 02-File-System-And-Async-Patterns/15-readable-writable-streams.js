/*
====================================================
EXERCISE 15: READABLE & WRITABLE STREAMS
====================================================

CONCEPT TESTED:
- Streams in Node.js
- Readable streams
- Writable streams
- Handling large data efficiently

THEORY:
Streams are used to handle large amounts of data
by reading/writing it in chunks instead of loading
everything into memory at once.

Types of streams:
1. Readable   → read data (fs.createReadStream)
2. Writable   → write data (fs.createWriteStream)
3. Duplex     → read & write
4. Transform  → modify data while streaming

Streams are memory-efficient and scalable.

INTERVIEW NOTE:
Q: Why are streams better than fs.readFile for large files?
A: Streams process data in chunks and do not load
   the entire file into memory.

PROBLEM STATEMENT:
Create a Node.js program that:
1. Reads data from a file using a readable stream
2. Writes that data into another file using a writable stream

WHAT YOU NEED TO IMPLEMENT:
- fs.createReadStream
- fs.createWriteStream
- data event

EXPECTED OUTPUT:
File copied successfully using streams

HOW TO RUN:
node 15-readable-writable-streams.js
====================================================
*/

const fs = require("fs");

// ===== CREATE STREAMS =====
const readableStream = fs.createReadStream("input.txt", {
  encoding: "utf-8"
});
const writableStream = fs.createWriteStream("output.txt");

// ===== READ & WRITE DATA =====
readableStream.on("data", chunk => {
  writableStream.write(chunk);
});

readableStream.on("end", () => {
  console.log("File copied successfully using streams");
});
