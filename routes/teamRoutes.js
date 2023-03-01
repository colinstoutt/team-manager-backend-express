const express = require("express");
const router = express.Router();
const teamController = require("../controllers/team");

router.get("/team/:id", teamController.getTeam);
router.get("/teams", teamController.getTeams);
router.post("/team", teamController.createTeam);
router.put("/team/:id", teamController.updateTeam);
router.delete("/team/:id", teamController.deleteTeam);

module.exports = router;
