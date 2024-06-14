const express = require("express");
const {
  createMarsApplicant,
  deleteMarsApplicant,
  getAllMarsApplicant,
  getSingleMarsApplicant,
  updateMarsApplicant,
} = require("../controllers/marsApplicant.js");

const router = express.Router();

//Create new data
router.post("/", createMarsApplicant);

//Update data
router.put("/:id", updateMarsApplicant);

//Delete
router.delete("/:id", deleteMarsApplicant);

//Get single data
router.get("/:id", getSingleMarsApplicant);

//Get all data
router.get("/", getAllMarsApplicant);

module.exports = router;
