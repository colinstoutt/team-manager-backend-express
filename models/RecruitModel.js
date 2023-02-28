const mongoose = require("mongoose");

const RecruitSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  contact: String,
  age: Number,
  hometown: String,
  position: String,
  height: Number,
  Weight: Number,
  current_team: String,
  notes: String,
  team: {
    type: Schema.Types.ObjectId,
    ref: "Team",
  },
});

module.exports = mongoose.model("Recruit", RecruitSchema);
