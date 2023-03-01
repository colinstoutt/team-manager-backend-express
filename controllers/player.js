const Player = require("../models/PlayerModel");

// Create a new player
const createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.status(201).json({ success: true, data: player });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Get all players
const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json({ success: true, data: players });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Get a single player
const getPlayer = async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player) {
      return res
        .status(404)
        .json({ success: false, error: "Player not found" });
    }
    res.status(200).json({ success: true, data: player });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Update a player
const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!player) {
      return res
        .status(404)
        .json({ success: false, error: "Player not found" });
    }
    res.status(200).json({ success: true, data: player });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Delete a player
const deletePlayer = async (req, res) => {
  try {
    const deletedPlayer = await Player.findByIdAndDelete(req.params.id);
    if (!deletedPlayer) {
      return res
        .status(404)
        .json({ success: false, error: "Player not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

module.exports = {
  createPlayer,
  getPlayer,
  getPlayers,
  updatePlayer,
  deletePlayer,
};
