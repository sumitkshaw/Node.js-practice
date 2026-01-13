/*
====================================================
EXERCISE 20: ROUTING & HTTP METHODS
====================================================

CONCEPT TESTED:
- Express routing
- HTTP methods (GET, POST)
- Request & response objects

THEORY:
Routing defines how an application responds
to client requests at specific endpoints.

Common HTTP methods:
- GET  → retrieve data
- POST → send data
- PUT  → update data
- DELETE → remove data

Express provides methods like:
app.get(), app.post(), app.put(), app.delete()

INTERVIEW NOTE:
Q: Difference between GET and POST?
A: GET retrieves data; POST sends data to the server.

PROBLEM STATEMENT:
Create an Express server with:
1. GET route `/user`
2. POST route `/user`

WHAT YOU NEED TO IMPLEMENT:
- Multiple routes
- Different HTTP methods

EXPECTED OUTPUT:
GET /user → "Fetching user"
POST /user → "Creating user"

HOW TO RUN:
node 20-routing-and-http-methods.js
====================================================
*/

const express = require("express");

const app = express();
const PORT = 3000;

// ===== ROUTES =====
app.get("/user", (req, res) => {
  res.send("Fetching user");
});

app.post("/user", (req, res) => {
  res.send("Creating user");
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
