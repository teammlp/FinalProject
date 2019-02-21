const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  id: Number,
  message: String,
  date: { type: Date, default: Date.now }
},
{ timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;