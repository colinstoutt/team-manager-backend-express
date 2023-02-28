const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  city: String,
  mascot: String,
  logo_url: String,
  team_color: String,
  players: [
    {
      type: Schema.Types.ObjectId,
      ref: "Player",
    },
  ],
  recruits: [
    {
      type: Schema.Types.ObjectId,
      ref: "Recruit",
    },
  ],
  games: [
    {
      type: Schema.Types.ObjectId,
      ref: "Game",
    },
  ],
});

module.exports = mongoose.model("Team", TeamSchema);
