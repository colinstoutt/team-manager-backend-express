const express = require("express");
const router = express.Router();
const gameController = require("../controllers/game");

router.get("/game/:id", gameController.getGame);
router.get("/game", gameController.getGames);
router.post("/game", gameController.createGame);
router.put("/game/:id", gameController.updateGame);
router.delete("/game/:id", gameController.deleteGame);

module.exports = router;
