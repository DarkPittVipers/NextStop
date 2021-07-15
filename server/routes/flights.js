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

router.get('/pricing', (req, res) => {
  amadeus.shopping.flightOffersSearch.get({
    originLocationCode: req.query.originLocationCode,
    destinationLocationCode: req.query.destinationLocationCode,
    departureDate: req.query.departureDate,
    adults: req.query.adults,
    currencyCode: 'USD',
  }).then((flightOffersResponse) => amadeus.shopping.flightOffers.pricing.post(
    JSON.stringify({
      data: {
        type: 'flight-offers-pricing',
        flightOffers: [
          flightOffersResponse.data[req.query.offersId - 1],
        ],
      },
    }),
  )).then((response) => {
    res.status(200).send(response.result);
  }).catch((err) => {
    console.log('err getting pricing in server', err);
    res.status(500).send(err);
  });
});

// endpoint for booking a flight

router.post('/booking', (req, res) => {
  amadeus.shopping.flightOffersSearch.get({
    originLocationCode: req.query.originLocationCode,
    destinationLocationCode: req.query.destinationLocationCode,
    departureDate: req.query.departureDate,
    adults: req.query.adults,
  }).then((flightOffersResponse) => amadeus.shopping.flightOffers.pricing.post(
    JSON.stringify({
      data: {
        type: 'flight-offers-pricing',
        flightOffers: [
          flightOffersResponse.data[req.body.offersId],
        ],
      },
    }),
  )).then((pricingResponse) => amadeus.booking.flightOrders.post(
    JSON.stringify({
      data: {
        type: 'flight-order',
        flightOffers: [pricingResponse.data.flightOffers[0]],
        travelers: [{
          id: req.body.travelerId,
          dateOfBirth: req.body.dateOfBirth,
          name: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
          },
          gender: req.body.gender,
          contact: {
            emailAddress: req.body.email,
            phones: [{
              deviceType: 'mobile',
              countryCallingCode: '01',
              number: req.body.phoneNumber,
            }],
          },
          documents: [{
            documentType: 'PASSPORT',
            birthPlace: req.body.birthPlace,
            issuanceLocation: req.body.issuanceLocation,
            issuanceDate: req.body.issuanceDate,
            number: req.body.passportNumber,
            expiryDate: req.body.expiryDate,
            issuanceCountry: req.body.issuanceCountry,
            validityCountry: req.body.validityCountry,
            nationality: req.body.nationality,
            holder: req.body.holder,
          }],
        }],
      },
    }),
  )).then((response) => {
    res.status(200).send(response.result);
  })
    .catch((response) => {
      console.log('error posting booking', response);
      res.status(500).send(response);
    });
});
module.exports = router;

// {
//   "id": "1",
//   "dateOfBirth": "1982-01-16",
//   "name": {
//     "firstName": "JORGE",
//     "lastName": "GONZALES"
//   },
//   "gender": "MALE",
//   "contact": {
//     "emailAddress": "jorge.gonzales833@telefonica.es",
//     "phones": [{
//       "deviceType": "MOBILE",
//       "countryCallingCode": "34",
//       "number": "480080076"
//     }]
//   },
//   "documents": [{
//     "documentType": "PASSPORT",
//     "birthPlace": "Madrid",
//     "issuanceLocation": "Madrid",
//     "issuanceDate": "2015-04-14",
//     "number": "00000000",
//     "expiryDate": "2025-04-14",
//     "issuanceCountry": "ES",
//     "validityCountry": "ES",
//     "nationality": "ES",
//     "holder": true
//   }]
// }
