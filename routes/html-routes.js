// Import Express router
const router = require("express").Router();

//Import path
const path = require("path");

// GET Request for Fitness Tracker Home page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// GET Request for Exercise Page
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// GET Request for Stats Page
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

// Export HTML routes
module.exports = router;