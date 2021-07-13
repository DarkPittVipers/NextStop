/* eslint-disable no-console */
const express = require('express');
const Amadeus = require('amadeus');

const router = express.Router();
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

// returns flight based on locations (current and destination), departure date, number of adults
// not for round trips
// departure date format is 'YYYY-MM-DD'

router.get('/oneWay', (req, res) => {
  amadeus.shopping.flightOffersSearch.get({
    originLocationCode: req.query.originLocationCode,
    destinationLocationCode: req.query.destinationLocationCode,
    departureDate: req.query.departureDate,
    adults: req.query.adults,
    currencyCode: 'USD',
    maxPrice: req.query.maxPrice,
    max: 100,
  }).then((response) => {
    res.status(200).send(response.result);
  }).catch((err) => {
    console.log('error in server getting flights', err);
    res.status(500).send(err);
  });
});

// returns flight based on locations (current and destination), departure date, number of adults
// FOR round trips
// departure date format is 'YYYY-MM-DD"

router.get('/roundTrip', (req, res) => {
  console.log('I AM IN ROUNDTRIP');
  amadeus.shopping.flightOffersSearch.get({
    originLocationCode: req.query.originLocationCode,
    destinationLocationCode: req.query.destinationLocationCode,
    departureDate: req.query.departureDate,
    adults: req.query.adults,
    returnDate: req.query.returnDate,
    currencyCode: 'USD',
    maxPrice: req.query.maxPrice,
    max: 100,
  }).then((response) => {
    res.status(200).send(response.result);
  }).catch((err) => {
    console.log('error in server getting flights', err);
    res.status(500).send(err);
  });
});

module.exports = router;
