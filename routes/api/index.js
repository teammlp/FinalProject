const router = require("express").Router();
const jobListRoutes = require("./jobLists");
const userFormRoutes = require("./userForm");
const apiRoutes = require("./apiRoutes");


// JobList routes
router.use("/", apiRoutes);
router.use("/jobLists", jobListRoutes);
router.use("/userForm", userFormRoutes);


module.exports = router;