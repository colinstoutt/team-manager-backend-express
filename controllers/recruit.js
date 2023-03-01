const Recruit = require("../models/RecruitModel");

// Create a new recruit
const createRecruit = async (req, res) => {
  try {
    const recruit = await Recruit.create(req.body);
    res.status(201).json({ success: true, data: recruit });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Get all recruits
const getRecruits = async (req, res) => {
  try {
    const recruits = await Recruit.find();
    res.status(200).json({ success: true, data: recruits });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Get a single recruit
const getRecruit = async (req, res) => {
  try {
    const recruit = await Recruit.findById(req.params.id);
    if (!recruit) {
      return res
        .status(404)
        .json({ success: false, error: "recruit not found" });
    }
    res.status(200).json({ success: true, data: recruit });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Update a recruit
const updateRecruit = async (req, res) => {
  try {
    const recruit = await Recruit.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!recruit) {
      return res
        .status(404)
        .json({ success: false, error: "recruit not found" });
    }
    res.status(200).json({ success: true, data: recruit });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

// Delete a recruit
const deleteRecruit = async (req, res) => {
  try {
    const deletedRecruit = await Recruit.findByIdAndDelete(req.params.id);
    if (!deletedRecruit) {
      return res
        .status(404)
        .json({ success: false, error: "Recruit not found" });
    }
    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

module.exports = {
  createRecruit,
  getRecruit,
  getRecruits,
  updateRecruit,
  deleteRecruit,
};
