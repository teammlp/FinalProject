const router = require("express").Router();
const jobsController = require("../../controllers/jobsController");

router.route("/search")
  .get(jobsController.search);

// Matches with "/api/task/:id"
router
  .route("/complete")
  .get(jobsController.locationCompletion);



module.exports = router;