const mongoose = require("mongoose");

const MarsApplicantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    departureDate: {
      type: Date,
      required: true,
    },
    returnDate: {
      type: Date,
      required: true,
    },
    accommodationPreference: {
      type: String,
      required: true,
    },
    preferences: {
      type: String,
      required: true,
    },
    healthDeclaration: {
      type: String,
      required: true,
    },
    egInfoName: {
      type: String,
      required: true,
    },
    egInfoEmail: {
      type: String,
      required: true,
    },
    egInfoPhone: {
      type: String,
      required: true,
    },
    medicalConditions: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MarsApplicant", MarsApplicantSchema);
