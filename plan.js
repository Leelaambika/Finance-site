const mongoose = require("mongoose");

const PlanSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  duration: String,
  members: [String], // user IDs who joined
});

module.exports = mongoose.model("Plan", PlanSchema);

