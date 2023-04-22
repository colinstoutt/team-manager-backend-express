const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  city: String,
  mascot: String,
  logo_url: String,
  team_color: String,
});

module.exports = mongoose.model("Team", teamSchema);
