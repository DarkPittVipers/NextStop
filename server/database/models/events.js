const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  userId: String,
  type: String,
  subType: String,
  id: String,
  self: {
      href: String,
      methods: [String],
  },
  geoCode: {
      latitude: Number,
      longitude: Number,
  },
  name: String,
  category: String,
  rank: Number,
  tags: [String],
});

const Event = mongoose.model('event', EventSchema);

module.exports = Event;
