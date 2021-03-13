const express = require("express");
const router = express.Router();

// Count users route.
router.get("/", function (req, res) {
  res.status(200).json({
    success: true,
    message: "Hello world!"
  });
});

module.exports = router;