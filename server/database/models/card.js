const mongoose = require('mongoose');

const CardSchema = mongoose.Schema({
  image: String,
  username: String,
  description: String,
  rating: { type: Number, default: 0 },
  reported: { type: Boolean, default: false },
}, {
  timestamps: true,
});

const Card = mongoose.model('card', CardSchema);

module.exports = Card;
