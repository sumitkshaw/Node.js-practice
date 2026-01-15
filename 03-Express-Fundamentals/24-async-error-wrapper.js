/**
 * ======================================
 * EXERCISE 24: Async Error Handling Wrapper
 * ======================================
 *
 * THEORY:
 * Express does NOT catch async errors automatically.
 *
 * This is WRONG:
 * async (req, res) => { throw new Error() }
 *
 * Solution:
 * Wrap async functions and forward errors
 * using next(err).
 *
 * This avoids writing try-catch everywhere.
 */

const express = require("express");
const app = express();

/**
 * Async Wrapper Utility
 */
const asyncHandler = (fn) => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

/**
 * Async route using wrapper
 */
app.get(
  "/data",
  asyncHandler(async (req, res) => {
    throw new Error("Database connection failed");
  })
);

/**
 * Central Error Middleware
 */
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/**
 * EXPECTED BEHAVIOR:
 * GET /data → Error handled by middleware
 *
 * INTERVIEW NOTES:
 * - Express doesn't auto-handle async errors
 * - asyncHandler is industry standard
 * - Used heavily in production apps
 */
