/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
const express = require('express');
const Amadeus = require('amadeus');

const router = express.Router();
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

router.get('/', (req, res) => {
  amadeus.shopping.hotelOffers.get({
    cityCode: req.query.cityCode,
    checkInDate: req.query.checkInDate,
    checkOutDate: req.query.checkOutDate,
    adults: req.query.adults,
  }).then((response) => {
    res.status(200).send(response.result);
  }).catch((err) => {
    console.log('error in server getting flights', err);
    res.status(500).send(err);
  });
});

module.exports = router;
