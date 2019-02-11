const router = require("express").Router();

const pleasegodlogin = require('../serverAPI/user').pleasegodlogin;
const getUserbyUsernamePass = require('../serverAPI/user').getUserbyUsernamePass;
const getUser = require('../serverAPI/user').getUser;
const saveUser = require('../serverAPI/user').saveUser;
const updateUser = require('../serverAPI/user').updateUser;
const deleteUser = require('../serverAPI/user').deleteUser;

router.get("/get/user/login/", getUserbyUsernamePass);
router.post("/user/login", pleasegodlogin);
router.get("/get/user/:username", getUser);
router.put("/user", saveUser);
router.post("/user", updateUser);
router.delete("/delete/user/:id", deleteUser);

module.exports = router;