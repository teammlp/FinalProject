const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userFormSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: "User"},
  company: { type: String, required: true },
  position: { type: String, required: true },
  detail: String,
  date: { type: Date, default: Date.now },
  location: String
});

const UserForm = mongoose.model("UserForm", userFormSchema);

module.exports = UserForm;