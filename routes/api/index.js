const router = require("express").Router();
const userFormRoutes = require("./userForm");
const jobsRoutes = require("./jobs");
const apiRoutes = require("./apiRoutes");
const jobBoardRoutes = require("./jobBoard");
// const taskRoutes = require("./tasks");


// JobList routes
router.use("/", apiRoutes);
router.use("/userForm", userFormRoutes);
<<<<<<< Updated upstream
router.use("/jobBoard", jobBoardRoutes);
=======
router.use("/jobs", jobsRoutes);
>>>>>>> Stashed changes
// router.use("/tasks", taskRoutes);


module.exports = router;