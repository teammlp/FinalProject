const router = require("express").Router();
const jobListsController = require("../../controllers/jobListsController");

// Matches with "/api/jobLists"
router.route("/")
  .get(jobListsController.findAll)
  .post(jobListsController.create);

// Matches with "/api/jobLists/:id"
router
  .route("/:id")
  .get(jobListsController.findById)
  .put(jobListsController.update)
  .delete(jobListsController.remove);

module.exports = router;