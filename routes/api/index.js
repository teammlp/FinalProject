const router = require("express").Router();
const userFormRoutes = require("./userForm");
// const jobsRoutes = require("./jobs");
const apiRoutes = require("./apiRoutes");

// const taskRoutes = require("./tasks");


// JobList routes
router.use("/", apiRoutes);
router.use("/userForm", userFormRoutes);
// router.use("/jobs", jobsRoutes);
// router.use("/tasks", taskRoutes);


module.exports = router;