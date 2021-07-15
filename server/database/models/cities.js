const mongoose = require('mongoose');

const CitySchema = mongoose.Schema({
  id: Number,
  city: String,
  city_ascii: String,
  lat: Number,
  lng: Number,
  country: String,
  iso2: String,
  iso3: String,
  admin_name: String,
  capital: String,
  population: Number,
  airports: [String],
});

const City = mongoose.model('city', CitySchema);

module.exports = City;
