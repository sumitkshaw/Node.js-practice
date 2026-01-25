/**
 * ======================================
 * EXERCISE 33: Service Layer Pattern
 * ======================================
 *
 * THEORY:
 * In real applications:
 * - Routes should NOT contain business logic
 * - Logic is moved to a service layer
 *
 * Benefits:
 * - Cleaner code
 * - Easy testing
 * - Reusable logic
 */

// userService.js (simulated)
const userService = {
  getUserById(id) {
    if (!id) {
      throw new Error("User ID required");
    }

    return {
      id,
      name: "Sumit",
      role: "Admin",
    };
  },
};

const express = require("express");
const app = express();

/**
 * Route uses service layer
 */
app.get("/users/:id", (req, res) => {
  try {
    const user = userService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/**
 * EXPECTED BEHAVIOR:
 * - Valid ID → user data
 * - Missing ID → error response
 *
 * INTERVIEW NOTES:
 * - Routes handle HTTP
 * - Services handle business logic
 * - Makes codebase scalable
 */
