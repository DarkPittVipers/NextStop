const mongoose = require('mongoose');

const HotelSchema = mongoose.Schema({
  authId: String,
});

const Hotel = mongoose.model('hotel', HotelSchema);

module.exports = Hotel;
