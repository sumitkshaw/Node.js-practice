/**
 * ======================================
 * EXERCISE 25: Custom Error Class
 * ======================================
 *
 * THEORY:
 * Instead of throwing generic Error objects,
 * professional Node.js apps use custom error classes.
 *
 * Benefits:
 * - Consistent error structure
 * - Easier debugging
 * - Better status code handling
 */

const express = require("express");
const app = express();

/**
 * Custom Error Class
 */
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

/**
 * Route using custom error
 */
app.get("/user", (req, res, next) => {
  const userExists = false;

  if (!userExists) {
    return next(new AppError("User not found", 404));
  }

  res.send("User data");
});

/**
 * Central Error Handler
 */
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/**
 * EXPECTED BEHAVIOR:
 * GET /user → 404 User not found
 *
 * INTERVIEW NOTES:
 * - Custom errors extend Error
 * - statusCode stored in error
 * - isOperational helps differentiate errors
 */
