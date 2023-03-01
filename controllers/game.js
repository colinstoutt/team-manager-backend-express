const Game = require("../models/GameModel");

// Create a new game
const createGame = async (req, res) => {
  try {
    const game = await Game.create(req.body);
    res.status(201).json({ success: true, data: game });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Get all games
const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json({ success: true, data: games });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Get a single game
const getGame = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    if (!game) {
      return res.status(404).json({ success: false, error: "game not found" });
    }
    res.status(200).json({ success: true, data: game });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Update a game
const updateGame = async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!game) {
      return res.status(404).json({ success: false, error: "game not found" });
    }
    res.status(200).json({ success: true, data: game });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Delete a game
const deleteGame = async (req, res) => {
  try {
    const deletedGame = await Game.findByIdAndDelete(req.params.id).populate(
      "team"
    );
    if (!deletedGame) {
      return res.status(404).json({ success: false, error: "Game not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

module.exports = {
  createGame,
  getGame,
  getGames,
  updateGame,
  deleteGame,
};
