const mongoose = require("mongoose");

const GameSchema = new mongoose.Schema({
  location: String,
  address: String,
  date: String,
  time: String,
  homeTeam: String,
  awayTeam: String,
  team: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
});

module.exports = mongoose.model("Game", GameSchema);
