/**
 * ================================
 * EXERCISE 21: Custom Logging Middleware
 * ================================
 *
 * THEORY:
 * Middleware in Express is a function that runs between
 * the incoming request and the final response.
 *
 * It has access to:
 *  - req (request)
 *  - res (response)
 *  - next (to pass control)
 *
 * Middleware is commonly used for:
 *  - Logging
 *  - Authentication
 *  - Validation
 *  - Error handling
 *
 * Order of middleware MATTERS.
 */

const express = require("express");
const app = express();

/**
 * Custom Logging Middleware
 * Logs HTTP method, URL and timestamp
 */
function loggerMiddleware(req, res, next) {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.url}`);
  next(); // important: passes control to next middleware/route
}

// Apply middleware globally
app.use(loggerMiddleware);

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", (req, res) => {
  res.send("Users Page");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/**
 * EXPECTED BEHAVIOR:
 * Visiting any route logs:
 * [timestamp] METHOD URL
 *
 * Example:
 * [2026-01-15T12:00:00.000Z] GET /
 *
 * INTERVIEW NOTES:
 * - Middleware must call next()
 * - app.use() applies middleware globally
 * - Middleware executes in order of definition
 */
