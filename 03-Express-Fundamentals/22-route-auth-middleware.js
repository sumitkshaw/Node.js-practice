/**
 * ================================
 * EXERCISE 22: Route-Level Authentication Middleware
 * ================================
 *
 * THEORY:
 * Route-level middleware is applied to
 * specific routes instead of the whole app.
 *
 * Common use cases:
 *  - Authentication
 *  - Authorization
 *  - Role-based access
 */

const express = require("express");
const app = express();

/**
 * Fake Authentication Middleware
 * Checks for ?token=secret in query params
 */
function authMiddleware(req, res, next) {
  const token = req.query.token;

  if (token === "secret") {
    next(); // user is authenticated
  } else {
    res.status(401).send("Unauthorized Access");
  }
}

app.get("/", (req, res) => {
  res.send("Public Route");
});

// Protected route
app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to Dashboard");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/**
 * EXPECTED BEHAVIOR:
 * GET /dashboard → Unauthorized
 * GET /dashboard?token=secret → Success
 *
 * INTERVIEW NOTES:
 * - Middleware can be attached per route
 * - next() only called when condition passes
 * - Real apps use headers/JWT instead of query params
 */
