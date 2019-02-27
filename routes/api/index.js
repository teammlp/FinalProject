const router = require("express").Router();
const userFormRoutes = require("./userForm");
const apiRoutes = require("./apiRoutes");
const jobBoardRoutes = require("./jobBoard");
// const taskRoutes = require("./tasks");


// JobList routes
router.use("/", apiRoutes);
router.use("/userForm", userFormRoutes);
router.use("/jobBoard", jobBoardRoutes);
// router.use("/tasks", taskRoutes);


module.exports = router;