/**
 * ======================================
 * EXERCISE 32: JWT Verification Middleware
 * ======================================
 *
 * THEORY:
 * Protected routes require token verification.
 *
 * Token is usually sent as:
 * Authorization: Bearer <token>
 */

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

const SECRET_KEY = "supersecret";

/**
 * Auth Middleware
 */
function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Token missing" });
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    req.user = decoded;
    next();
  });
}

/**
 * Protected route
 */
app.get("/profile", verifyToken, (req, res) => {
  res.json({
    message: "Profile data",
    user: req.user,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/**
 * EXPECTED BEHAVIOR:
 * - No token → 401
 * - Invalid token → 403
 * - Valid token → access granted
 *
 * INTERVIEW NOTES:
 * - JWT sent via Authorization header
 * - verifyToken is reusable middleware
 * - Token expiry handled automatically
 */
