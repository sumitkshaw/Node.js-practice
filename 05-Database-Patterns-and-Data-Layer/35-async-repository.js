/**
 * ======================================
 * EXERCISE 35: Async Repository Methods
 * ======================================
 *
 * THEORY:
 * Databases are I/O operations.
 * Hence, repository methods must be async.
 *
 * This prevents blocking the event loop.
 */

// userRepository.js (simulated async)
const userRepository = {
  async findById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id,
          name: "Async User",
        });
      }, 500);
    });
  },
};

const express = require("express");
const app = express();

/**
 * Service layer
 */
async function getUser(id) {
  return await userRepository.findById(id);
}

/**
 * Route layer
 */
app.get("/users/:id", async (req, res) => {
  const user = await getUser(req.params.id);
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/**
 * EXPECTED BEHAVIOR:
 * - Async user fetch simulation
 *
 * INTERVIEW NOTES:
 * - DB operations are async
 * - Blocking calls kill performance
 * - async/await improves readability
 */
