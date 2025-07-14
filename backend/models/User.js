const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['student', 'teacher', 'admin'], required: true },
  adminType: { type: String, enum: ['super', 'user', 'content', 'finance', null], default: null },
  division: { type: String, enum: ['tcs-coaching', 'sarvoday-gurukulam'], required: true },
});

module.exports = mongoose.model('User', userSchema);