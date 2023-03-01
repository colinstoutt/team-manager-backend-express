const express = require("express");
const router = express.Router();
const recruitController = require("../controllers/recruit");
const Recruit = require("../models/RecruitModel");
const recruitSeed = require("../data/recruits");

router.get("/recruit/:id", recruitController.getRecruit);
router.get("/recruits", recruitController.getRecruits);
router.post("/recruit", recruitController.createRecruit);
router.put("/recruit/:id", recruitController.updateRecruit);
router.delete("/recruit/:id", recruitController.deleteRecruit);
// seed route
router.get("/recruits/seed", (req, res) => {
  Recruit.create(recruitSeed, res.redirect("/manager/recruits"));
});

module.exports = router;
