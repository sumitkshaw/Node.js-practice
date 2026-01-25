/**
 * ======================================
 * EXERCISE 34: Repository Pattern
 * ======================================
 *
 * THEORY:
 * Repository layer isolates database logic.
 *
 * Flow:
 * Route → Service → Repository → Database
 *
 * Benefits:
 * - Easy DB replacement
 * - Centralized data logic
 * - Cleaner services
 */

// userRepository.js (simulated)
const userRepository = {
  findById(id) {
    return {
      id,
      email: "user@example.com",
    };
  },
};

const express = require("express");
const app = express();

/**
 * Service layer
 */
function getUser(id) {
  return userRepository.findById(id);
}

/**
 * Route layer
 */
app.get("/users/:id", (req, res) => {
  const user = getUser(req.params.id);
  res.json(user);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/**
 * EXPECTED BEHAVIOR:
 * - Route never touches DB logic
 *
 * INTERVIEW NOTES:
 * - Repository abstracts data source
 * - Enables unit testing
 * - Used heavily in large systems
 */
