const router = require("express").Router();
const path = require("path");
//routes for views
router.get("/", (q, r) => {
  r.sendFile(path.join(__dirname, "../public/index.html"));
});

router.get("/exercise", (q, r) => {
  r.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (q, r) => {
  r.sendFile(path.join(__dirname, "../public/stats.html"));
});
// exports router
module.exports = router;