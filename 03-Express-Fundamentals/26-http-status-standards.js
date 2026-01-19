/**
 * ======================================
 * EXERCISE 26: HTTP Status Code Standardization
 * ======================================
 *
 * THEORY:
 * APIs should return meaningful HTTP status codes.
 *
 * Common codes:
 * 200 - OK
 * 201 - Created
 * 400 - Bad Request
 * 401 - Unauthorized
 * 403 - Forbidden
 * 404 - Not Found
 * 500 - Internal Server Error
 */

const express = require("express");
const app = express();

app.use(express.json());

/**
 * Create resource
 */
app.post("/items", (req, res) => {
  if (!req.body.name) {
    return res.status(400).json({
      message: "Item name is required",
    });
  }

  res.status(201).json({
    message: "Item created successfully",
  });
});

/**
 * Fetch resource
 */
app.get("/items/:id", (req, res) => {
  const itemFound = false;

  if (!itemFound) {
    return res.status(404).json({
      message: "Item not found",
    });
  }

  res.status(200).json({
    message: "Item fetched",
  });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

/**
 * EXPECTED BEHAVIOR:
 * - Missing data → 400
 * - Successful creation → 201
 * - Missing resource → 404
 *
 * INTERVIEW NOTES:
 * - Status codes convey intent
 * - Avoid always returning 200
 * - RESTful APIs rely heavily on semantics
 */
