/* eslint-disable no-console */
const express = require('express');
const Amadeus = require('amadeus');

const router = express.Router();
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

// Returns activities for a location in Barcelona based on geolocation coordinates
// categories to choose from: SIGHTS, NIGHTLIFE, RESTAURANT, SHOPPING
router.get('/', (req, res) => {
  amadeus.referenceData.locations.pointsOfInterest.get({
    latitude: req.query.latitude,
    longitude: req.query.longitude,
    radius: 100,
    category: req.query.category,
  }).then((response) => {
    res.status(200).send(response.result);
  }).catch((err) => {
    console.log(err);
    res.status(500).send(err);
  });
});

module.exports = router;
