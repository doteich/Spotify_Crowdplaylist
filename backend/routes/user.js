const express = require("express");

const router = express.Router();
const userController = require("../controller/user")

router.post("/create", userController.createUser)
router.post("/auth", userController.authUser)



module.exports = router;