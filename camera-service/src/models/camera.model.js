const mongoose = require("mongoose");

const cameraSchema = new mongoose.Schema(
  {
    cameraName: {
      type: String,
      required: true,
      trim: true
    },
    brand: {
      type: String,
      required: true,
      trim: true
    },
    model: {
      type: String,
      required: true,
      trim: true
    },
    category: {
      type: String,
      required: true,
      trim: true
    },
    pricePerDay: {
      type: Number,
      required: true
    },
    status: {
      type: String,
      enum: ["AVAILABLE", "BOOKED", "MAINTENANCE"],
      default: "AVAILABLE"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Camera", cameraSchema);