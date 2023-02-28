const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  contact: String,
  age: Number,
  number: Number,
  position: String,
  status: String,
  team: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
});

module.exports = mongoose.model("Player", PlayerSchema);
