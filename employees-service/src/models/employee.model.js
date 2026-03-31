const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema(
  {
    employeeCode: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    firstName: {
      type: String,
      required: true,
      trim: true
    },
    lastName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    department: {
      type: String,
      required: true,
      trim: true
    },
    position: {
      type: String,
      required: true,
      trim: true
    },
    address: {
      type: String,
      default: "",
      trim: true
    },
    salary: {
      type: Number,
      required: true,
      min: 0
    },
    employmentType: {
      type: String,
      enum: ["FULL_TIME", "PART_TIME", "CONTRACT", "INTERN"],
      default: "FULL_TIME"
    },
    hireDate: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      enum: ["ACTIVE", "ON_LEAVE", "RESIGNED"],
      default: "ACTIVE"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Employee", employeeSchema);