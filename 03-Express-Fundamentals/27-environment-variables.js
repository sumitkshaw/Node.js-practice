/**
 * ======================================
 * EXERCISE 27: Environment Variables
 * ======================================
 *
 * THEORY:
 * Environment variables store configuration
 * outside the codebase.
 *
 * Why?
 * - Security (API keys, secrets)
 * - Different environments (dev, prod)
 * - No hardcoding sensitive values
 *
 * Node.js exposes env variables via:
 * process.env
 *
 * Example:
 * PORT=3000 node app.js
 */

const express = require("express");
const app = express();

// Read environment variable
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Server running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

/**
 * EXPECTED BEHAVIOR:
 * PORT=4000 node 27-environment-variables.js
 * → Server runs on port 4000
 *
 * INTERVIEW NOTES:
 * - process.env values are always strings
 * - Never commit secrets to GitHub
 * - Used heavily in production
 */
