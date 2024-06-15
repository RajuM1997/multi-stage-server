const MarsApplicant = require("../models/MarsApplicant.js");

const createMarsApplicant = async (req, res, next) => {
  const newMarsApplicant = new MarsApplicant(req.body);
  console.log(newMarsApplicant);
  try {
    const savedMarsApplicant = await newMarsApplicant.save();
    res.status(201).json(savedMarsApplicant);
  } catch (err) {
    next(err);
  }
};

const updateMarsApplicant = async (req, res, next) => {
  try {
    const updatedMarsApplicant = await MarsApplicant.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedMarsApplicant);
  } catch (err) {
    next(err);
  }
};

const deleteMarsApplicant = async (req, res, next) => {
  try {
    await MarsApplicant.findByIdAndDelete(req.params.id);
    res.status(200).json("Mars Applicant has been deleted");
  } catch (err) {
    next(err);
  }
};

const getSingleMarsApplicant = async (req, res, next) => {
  try {
    const marsApplicant = await MarsApplicant.findById(req.params.id);
    res.status(200).json(marsApplicant);
  } catch (err) {
    next(err);
  }
};

const getAllMarsApplicant = async (req, res, next) => {
  const { ...others } = req.query;
  try {
    const marsApplicant = await MarsApplicant.find({ ...others });
    res.status(200).json(marsApplicant);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createMarsApplicant,
  updateMarsApplicant,
  deleteMarsApplicant,
  getSingleMarsApplicant,
  getAllMarsApplicant,
};
