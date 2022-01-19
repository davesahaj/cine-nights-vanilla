const express = require("express");
const { createRoom, joinRoom } = require("../controller/roomController");
const { getVideo } = require("../controller/videoController");
const router = express.Router();

router.route("/create").post(createRoom);
router.route("/join/:roomid").post(joinRoom);
router.route("/video/:roomid/:filename").get(getVideo);

module.exports = router;
