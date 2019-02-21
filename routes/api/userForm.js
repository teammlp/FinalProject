const router = require("express").Router();
const userFormController = require("../../controllers/userFormController");

// Matches with "/api/userForm"
router.route("/")
  .get(userFormController.findAll)
  .post(userFormController.create);

// Matches with "/api/userForm/:id"
router
  .route("/:id")
  .get(userFormController.findById)
  .put(userFormController.update)
  .delete(userFormController.remove);

module.exports = router;