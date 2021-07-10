const express = require('express');
const Amadeus = require('amadeus');

const router = express.Router();
const amadeus = new Amadeus();

// Returns activities for a location in Barcelona based on geolocation coordinates
router.get('/events', (req, res) => {
  amadeus.shopping.activities.get({
    latitude: req.params.latitude,
    longitude: req.params.longitude,
  }).then((response) => {
    console.log(response);
    res.status(200).send(response);
  }).catch((response) => {
    console.error(response);
    res.status(500).send(response);
  });
});

module.exports = router;
