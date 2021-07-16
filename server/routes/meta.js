/* eslint-disable no-console */
const express = require('express');
const City = require('../database/models/cities');
const Airline = require('../database/models/airlines');

const router = express.Router();

router.get('/cities', (req, res) => {
  const partialQuery = new RegExp(req.query.searchTerm, 'i');
  City.find({
    $or: [
      { city_ascii: partialQuery },
      { country: partialQuery },
    ],
  }).exec()
    .then((docs) => {
      res.status(200).send(docs);
    })
    .catch((err) => res.send(err));
});

router.get('/airline', (req, res) => {
  Airline.findOne({ iata: req.query.iataCode }).exec()
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
