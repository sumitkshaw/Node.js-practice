/**
 * ======================================
 * EXERCISE 28: dotenv Configuration
 * ======================================
 *
 * THEORY:
 * The dotenv package loads environment
 * variables from a .env file into process.env
 *
 * This keeps:
 * - Config separate from logic
 * - Secrets out of source code
 *
 * .env file example:
 * PORT=5000
 * DB_URL=mongodb://localhost
 */

require("dotenv").config(); // MUST be first

const express = require("express");
const app = express();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

app.get("/", (req, res) => {
  res.json({
    port: PORT,
    database: DB_URL,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/**
 * EXPECTED BEHAVIOR:
 * Values loaded from .env file
 *
 * INTERVIEW NOTES:
 * - dotenv only for development
 * - Production uses actual env vars
 * - .env should be gitignored
 */
