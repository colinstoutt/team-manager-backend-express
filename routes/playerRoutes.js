const express = require("express");
const router = express.Router();
const playerController = require("../controllers/player");
const Player = require("../models/PlayerModel");
const playerSeed = require("../data/players");

router.get("/player/:id", playerController.getPlayer);
router.get("/players", playerController.getPlayers);
router.post("/player", playerController.createPlayer);
router.put("/player/:id", playerController.updatePlayer);
router.delete("/player/:id", playerController.deletePlayer);
// seed route
router.get("/players/seed", (req, res) => {
  Player.create(playerSeed, res.redirect("/manager/players"));
});

module.exports = router;
