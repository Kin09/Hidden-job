const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  company: String,
  position: String,
  status: { type: String, enum: ["Applied", "Interviewing", "Offer", "Rejected"] },
  followUpDate: Date,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", JobSchema);
