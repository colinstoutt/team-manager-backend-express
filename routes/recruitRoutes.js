const express = require("express");
const router = express.Router();
const recruitController = require("../controllers/recruit");

router.get("/recruit/:id", recruitController.getRecruit);
router.get("/recruit", recruitController.getRecruits);
router.post("/recruit", recruitController.createRecruit);
router.put("/recruit/:id", recruitController.updateRecruit);
router.delete("/recruit/:id", recruitController.deleteRecruit);

module.exports = router;
