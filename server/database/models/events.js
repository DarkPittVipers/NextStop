const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  userId: String,
});

const Event = mongoose.model('event', EventSchema);

module.exports = Event;
