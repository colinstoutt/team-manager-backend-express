const express = require("express");
const router = express.Router();
const playerController = require("../controllers/player");

router.get("/player/:id", playerController.getPlayer);
router.get("/player", playerController.getPlayers);
router.post("/player", playerController.createPlayer);
router.put("/player/:id", playerController.updatePlayer);
router.delete("/player/:id", playerController.deletePlayer);

module.exports = router;
