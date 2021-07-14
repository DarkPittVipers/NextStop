/* eslint-disable max-len */
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
    latitude: req.query.latitude,
    longitude: req.query.longitude,
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

router.post('/booking', (req, res) => {
  console.log('hitting this');
  amadeus.shopping.hotelOffers.get({
    latitude: req.query.latitude,
    longitude: req.query.longitude,
    checkInDate: req.query.checkInDate,
    checkOutDate: req.query.checkOutDate,
    adults: req.query.adults,
  })
    .then((hotels) => amadeus.shopping.hotelOffersByHotel.get({
      hotelId: hotels.data[req.query.hotelIndex - 1].hotel.hotelId,
      checkInDate: req.query.checkInDate,
      checkOutDate: req.query.checkOutDate,
    }))
    .then((hotelOffers) => amadeus.shopping.hotelOffer(hotelOffers.data.offers[req.query.hotelIndex - 1].id).get())
    .then((pricingResponse) => amadeus.booking.hotelBookings.post(
      JSON.stringify({
        data: {
          offerId: pricingResponse.result.data.offers[0].id,
          guests: [{
            name: {
              title: req.body.title,
              firstName: req.body.firstName,
              lastName: req.body.lastName,
            },
            contact: {
              phone: '+33679278416',
              email: req.body.email,
            },
          }],
          payments: [{
            method: 'creditCard',
            card: {
              vendorCode: req.body.vendorCode,
              cardNumber: req.body.cardNumber,
              expiryDate: req.body.expiryDate,
            },
          }],
        },
      }),
    ))
    .then((response) => {
      res.status(200).send(response.result);
    })
    .catch((err) => {
      console.log('error booking hotel', err);
    });
});

module.exports = router;
