
const router = require("express").Router();

const pleasegodlogin = require('../../controllers/usersController').pleasegodlogin;
const getUserbyUsernamePass = require('../../controllers/usersController').getUserbyUsernamePass;
const getUser = require('../../controllers/usersController').getUser;
const saveUser = require('../../controllers/usersController').saveUser;
const updateUser = require('../../controllers/usersController').updateUser;
const deleteUser = require('../../controllers/usersController').deleteUser;

router.get("/get/user/login/", getUserbyUsernamePass);
router.post("/user/login", pleasegodlogin);
router.get("/get/user/:username", getUser);
router.put("/user", saveUser);
router.post("/user", updateUser);
router.delete("/delete/user/:id", deleteUser);

module.exports = router;