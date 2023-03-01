const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game");
const Game = require("../models/GameModel");
const gameSeed = require("../data/games");

router.get("/game/:id", gameController.getGame);
router.get("/games", gameController.getGames);
router.post("/game", gameController.createGame);
router.put("/game/:id", gameController.updateGame);
router.delete("/game/:id", gameController.deleteGame);
// seed route
router.get("/games/seed", (req, res) => {
  Game.create(gameSeed, res.redirect("/manager/games"));
});

module.exports = router;
