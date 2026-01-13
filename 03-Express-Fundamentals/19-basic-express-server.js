/*
====================================================
EXERCISE 19: BASIC EXPRESS SERVER
====================================================

CONCEPT TESTED:
- Express.js basics
- Creating an HTTP server
- app.listen()
- Handling requests

THEORY:
Express.js is a minimal web framework built on top of Node.js.
It simplifies:
- HTTP server creation
- Request/response handling
- Routing and middleware

Instead of using the low-level `http` module,
Express provides a cleaner and more readable API.

INTERVIEW NOTE:
Q: Why use Express instead of Node's http module?
A: Express reduces boilerplate and improves readability.

PROBLEM STATEMENT:
Create a basic Express server that listens on port 3000
and responds with a message for the root route.

WHAT YOU NEED TO IMPLEMENT:
- Initialize Express
- Define a route
- Start the server

EXPECTED OUTPUT:
Server running on port 3000
Visiting http://localhost:3000 returns a message

HOW TO RUN:
npm install express
node 19-basic-express-server.js
====================================================
*/

const express = require("express");

const app = express();
const PORT = 3000;

// ===== ROUTE =====
app.get("/", (req, res) => {
  res.send("Hello from Express Server!");
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
