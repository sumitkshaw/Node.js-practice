/**
 * ======================================
 * EXERCISE 30: Password Verification
 * ======================================
 *
 * THEORY:
 * Login is done by comparing:
 * plain password ↔ hashed password
 *
 * bcrypt.compare():
 * - Returns true/false
 * - Handles salt internally
 */

const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

// Simulated stored hash
const storedHashedPassword =
  "$2b$10$Z9lGQmY1Jt5e9XyM5GzRFe3mZ9d8xN1G6D8Z9eY7X8L5Xz9Yz";

// Login route
app.post("/login", async (req, res) => {
  const { password } = req.body;

  const isMatch = await bcrypt.compare(password, storedHashedPassword);

  if (!isMatch) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  res.json({
    message: "Login successful",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/**
 * EXPECTED BEHAVIOR:
 * - Correct password → success
 * - Wrong password → 401
 *
 * INTERVIEW NOTES:
 * - Never decrypt hashes
 * - compare() is async
 * - Auth is verify, not decode
 */
