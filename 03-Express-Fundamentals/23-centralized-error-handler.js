/**
 * ======================================
 * EXERCISE 23: Centralized Error Handling
 * ======================================
 *
 * THEORY:
 * Express has a special type of middleware
 * for handling errors.
 *
 * Signature:
 * (err, req, res, next)
 *
 * Any error passed using next(err)
 * will automatically be caught here.
 *
 * Benefits:
 * - Cleaner routes
 * - Single error response format
 * - Easier debugging
 */

const express = require("express");
const app = express();

/**
 * Sample route that throws an error
 */
app.get("/crash", (req, res, next) => {
  const error = new Error("Something went wrong!");
  error.statusCode = 500;
  next(error); // forwarding error
});

/**
 * Centralized Error Middleware
 * MUST be defined at the end
 */
app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/**
 * EXPECTED BEHAVIOR:
 * GET /crash → JSON error response
 *
 * INTERVIEW NOTES:
 * - Error middleware has 4 parameters
 * - Order matters: must be last
 * - next(err) skips normal middleware
 */
