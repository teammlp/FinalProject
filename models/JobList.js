const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobListSchema = new Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  detail: String,
  date: { type: Date, default: Date.now },
  location: String
});

const JobList = mongoose.model("JobList", jobListSchema);

module.exports = JobList;