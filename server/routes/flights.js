/* eslint-disable no-console */
const express = require('express');
const Amadeus = require('amadeus');

const router = express.Router();
<<<<<<< HEAD
// const amadeus = new Amadeus();

// // flight inspiration for landing page from user current destination
// // description link https://developers.amadeus.com/self-service/category/air/api-doc/flight-inspiration-search

// router.get('/flights/landing', (req, res) => {
//   amadeus.shopping.flightDestinations.get({
//     origin: req.params.origin,
//   }).then((response) => {
//     console.log(response);
//     res.status(200).send(response);
//   }).catch((err) => {
//     console.log('error in server getting flights', err);
//     res.status(500).send(err);
//   });
// });

// // returns flight based on locations (current and destination), departure date, number of adults
// // not for round trips
// // departure date format is 'YYYY-MM-DD'

// router.get('/flights/oneWay', (req, res) => {
//   amadeus.shopping.flightOffersSearch.get({
//     originLocationCode: req.params.originLocationCode,
//     destinationLocationCode: req.params.destinationLocationCode,
//     departureDate: req.params.departureDate,
//     adults: req.params.adults,
//   }).then((response) => {
//     console.log(response);
//     res.status(200).send(response);
//   }).catch((err) => {
//     console.log('error in server getting flights', err);
//     res.status(500).send(err);
//   });
// });

// // returns flight based on locations (current and destination), departure date, number of adults
// // FOR round trips
// // departure date format is 'YYYY-MM-DD"

// router.get('/flights/roundTrip', (req, res) => {
//   amadeus.shopping.flightOffersSearch.get({
//     originLocationCode: req.params.originLocationCode,
//     destinationLocationCode: req.params.destinationLocationCode,
//     departureDate: req.params.departureDate,
//     adults: req.params.adults,
//     returnDate: req.params.returnDate,
//   }).then((response) => {
//     console.log(response);
//     res.status(200).send(response);
//   }).catch((err) => {
//     console.log('error in server getting flights', err);
//     res.status(500).send(err);
//   });
// });
=======
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});

// flight inspiration for landing page from user current destination
// description link https://developers.amadeus.com/self-service/category/air/api-doc/flight-inspiration-search

router.get('/flights/landing', (req, res) => {
  amadeus.shopping.flightDestinations.get({
    origin: req.params.origin,
  }).then((response) => {
    console.log(response);
    res.status(200).send(response);
  }).catch((err) => {
    console.log('error in server getting flights', err);
    res.status(500).send(err);
  });
});

// returns flight based on locations (current and destination), departure date, number of adults
// not for round trips
// departure date format is 'YYYY-MM-DD'

router.get('/flights/oneWay', (req, res) => {
  amadeus.shopping.flightOffersSearch.get({
    originLocationCode: req.params.originLocationCode,
    destinationLocationCode: req.params.destinationLocationCode,
    departureDate: req.params.departureDate,
    adults: req.params.adults,
  }).then((response) => {
    console.log(response);
    res.status(200).send(response);
  }).catch((err) => {
    console.log('error in server getting flights', err);
    res.status(500).send(err);
  });
});

// returns flight based on locations (current and destination), departure date, number of adults
// FOR round trips
// departure date format is 'YYYY-MM-DD"

router.get('/flights/roundTrip', (req, res) => {
  amadeus.shopping.flightOffersSearch.get({
    originLocationCode: req.params.originLocationCode,
    destinationLocationCode: req.params.destinationLocationCode,
    departureDate: req.params.departureDate,
    adults: req.params.adults,
    returnDate: req.params.returnDate,
  }).then((response) => {
    console.log(response);
    res.status(200).send(response);
  }).catch((err) => {
    console.log('error in server getting flights', err);
    res.status(500).send(err);
  });
});
>>>>>>> fec8110f9a0b0532b7fb2087029162c6502a382b

module.exports = router;
