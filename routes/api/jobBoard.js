const router = require("express").Router();
const jobBoardController = require("../../controllers/jobBoardController");

// Matches with "/api/books"
router.route("/")
  .get(jobBoardController.findAll)
  .post(jobBoardController.create);

// Matches with "/api/jobBoard/:id"
router.route("/:id")
  .get(jobBoardController.findById)
  .put(jobBoardController.update)
  .delete(jobBoardController.remove);

module.exports = router;