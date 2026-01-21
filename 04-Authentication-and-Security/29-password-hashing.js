/**
 * ======================================
 * EXERCISE 29: Password Hashing with bcrypt
 * ======================================
 *
 * THEORY:
 * Passwords should NEVER be stored in plain text.
 *
 * Hashing:
 * - One-way process
 * - Cannot be reversed
 *
 * bcrypt:
 * - Adds salt automatically
 * - Slows down brute-force attacks
 */

const express = require("express");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

/**
 * Signup route
 */
app.post("/signup", async (req, res) => {
  const { password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  res.json({
    message: "Password hashed successfully",
    hashedPassword,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/**
 * EXPECTED BEHAVIOR:
 * - Password is hashed
 * - Same password generates different hash each time
 *
 * INTERVIEW NOTES:
 * - bcrypt.hash(password, saltRounds)
 * - Never store plain passwords
 * - bcrypt.compare() for login
 */
