const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  location: String,
  address: String,
  date: { type: Date, default: Date.now },
  time: String,
  homeTeam: String,
  awayTeam: String,
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
});

module.exports = mongoose.model("Game", GameSchema);
