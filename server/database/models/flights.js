const mongoose = require('mongoose');

const FlightSchema = mongoose.Schema({
  authId: String,
});

const Flight = mongoose.model('flight', FlightSchema);

module.exports = Flight;
