/**
 * ======================================
 * EXERCISE 31: JWT Generation
 * ======================================
 *
 * THEORY:
 * JWT (JSON Web Token) is used for
 * stateless authentication.
 *
 * Structure:
 * header.payload.signature
 *
 * Stored on client and sent with each request.
 */

const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET_KEY = "supersecret";

/**
 * Login route – generate token
 */
app.post("/login", (req, res) => {
  const { userId } = req.body;

  const token = jwt.sign({ userId }, SECRET_KEY, {
    expiresIn: "1h",
  });

  res.json({
    message: "Token generated",
    token,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/**
 * EXPECTED BEHAVIOR:
 * - Token returned on login
 * - Token expires in 1 hour
 *
 * INTERVIEW NOTES:
 * - JWT is stateless
 * - Payload is NOT encrypted
 * - Secret key must be protected
 */
