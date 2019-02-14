const router = require("express").Router();
const jobListRoutes = require("./jobLists");
const userFormRoutes = require("./userForm");


// JobList routes
router.use("/jobLists", jobListRoutes);
router.use("/userForm", userFormRoutes);


module.exports = router;