const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  id: String,
  displayName: String,
  nickname: String,
  picture: String,
  provider: String,
  user_id: String,
  emails: [{
    value: String,
  }],
  name: {
    familyName: String,
    givenName: String,
  },
  budget: { type: Number, default: 10000 },
}, {
  timestamps: true,
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
