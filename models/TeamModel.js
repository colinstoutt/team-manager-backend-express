const mongoose = require("mongoose");
const PlayerSchema = require("../models/PlayerModel");
const RecruitSchema = require("../models/RecruitModel");
const GameSchema = require("../models/GameModel");

const TeamSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  city: String,
  mascot: String,
  logo_url: String,
  team_color: String,
});

module.exports = mongoose.model("Team", TeamSchema);
