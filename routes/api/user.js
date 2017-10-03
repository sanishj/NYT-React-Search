const usersController = require("../../controllers/usersController.js");
const express = require("express");
const router = express.Router();

router.route("/")
    .get(usersController.findAll);
router.route("/:id")
    .get(usersController.findById);

module.exports = router;