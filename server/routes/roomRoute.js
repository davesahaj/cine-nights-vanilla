const express = require("express");
const { createRoom, joinRoom } = require("../controller/roomController");
const router = express.Router();

router.route("/create").post(createRoom);
router.route("/join/:roomid").post(joinRoom);

module.exports = router;
