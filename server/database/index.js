/* eslint-disable no-console */
const mongoose = require('mongoose');

if (process.env.NODE_ENV !== 'testing') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const mongoURI = process.env.DATABASE_URI || 'mongodb://localhost:27017';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

db
  .then(() => console.log(`Connected to: ${mongoURI}`))
  .catch((err) => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`);
    console.log(err);
  });

module.exports = db;
