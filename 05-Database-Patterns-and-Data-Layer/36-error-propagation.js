/**
 * ======================================
 * EXERCISE 36: Error Propagation Across Layers
 * ======================================
 *
 * THEORY:
 * Errors should propagate upward:
 *
 * Repository → Service → Controller → Error Middleware
 *
 * No silent failures.
 */

// userRepository.js
const userRepository = {
  async findById(id) {
    if (!id) {
      throw new Error("Invalid ID");
    }

    return { id, name: "User" };
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
app.get("/users/:id", async (req, res, next) => {
  try {
    const user = await getUser(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

/**
 * Central error handler
 */
app.use((err, req, res, next) => {
  res.status(400).json({
    message: err.message,
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/**
 * EXPECTED BEHAVIOR:
 * - Invalid ID → error response
 *
 * INTERVIEW NOTES:
 * - Never swallow errors
 * - Errors move upward
 * - Central handling is mandatory
 */
