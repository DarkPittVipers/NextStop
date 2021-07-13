const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  authId: String,
}, {
  timestamps: true,
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
