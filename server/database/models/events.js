const mongoose = require('mongoose');

const EventSchema = mongoose.Schema({
  authId: String,
});

const Event = mongoose.model('event', EventSchema);

module.exports = Event;
