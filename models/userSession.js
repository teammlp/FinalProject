
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/FinalProject');

var db = mongoose.connection;

const UserSessionSchema = mongoose.Schema({
  userId: {
    type: Number,
    default: -1
  },
  timestamp: {
      type: Date,
      default: Date.now()
  },
  isDeleted: {
      type: Boolean,
      default: false
  }
});

const UserSession = module.exports = mongoose.model('UserSession', UserSessionSchema);