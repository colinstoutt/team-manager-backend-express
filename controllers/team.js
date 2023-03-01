const Team = require("../models/TeamModel");

// Create a new team
const createTeam = async (req, res) => {
  try {
    const team = await Team.create(req.body);
    res.status(201).json({ success: true, data: team });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Get all teams
const getTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json({ success: true, data: teams });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Get a single team
const getTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ success: false, error: "Team not found" });
    }
    res.status(200).json({ success: true, data: team });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Update a team
const updateTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!team) {
      return res.status(404).json({ success: false, error: "Team not found" });
    }
    res.status(200).json({ success: true, data: team });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Delete a team
const deleteTeam = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ success: false, error: "Team not found" });
    }
    await team.deleteOne();
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

module.exports = {
  createTeam,
  getTeam,
  getTeams,
  updateTeam,
  deleteTeam,
};
