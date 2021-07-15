const mongoose = require('mongoose');

const AirlineSchema = mongoose.Schema({
  id: String,
  name: String,
  alias: String,
  iata: String,
  icao: String,
  callsign: String,
  country: String,
  active: String,
});

const Airline = mongoose.model('airline', AirlineSchema);

module.exports = Airline;
