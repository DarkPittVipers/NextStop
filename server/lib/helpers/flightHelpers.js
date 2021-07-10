/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// flight inspiration for landing page from user current destination
// description link https://developers.amadeus.com/self-service/category/air/api-doc/flight-inspiration-search
// answers the question "what are the cheapest flights from <current destination>"

const Amadeus = require('amadeus');

const amadeus = new Amadeus();

const getFlightInspiration = (currentLocationCode, callback) => {
  amadeus.shopping.flightDestinations.get({
    origin: currentLocation,
  }).then((response) => {
    console.log(response);
    callback(null, response);
  }).catch((response) => {
    console.error('error in server getting flights', response);
    callback(response, null);
  });
};

// returns flight based on locations (current and destination), departure date, number of adults
// not for round trips
// departure date format is 'YYYY-MM-DD"

const getFlightsOneWay = (currentLocationCode, destinationLocationCode, departureDate, numberOfAdults, callback) => {
  amadeus.shopping.flightOffersSearch.get({
    currentLocationCode,
    destinationLocationCode,
    departureDate,
    numberOfAdults,
  }).then((response) => {
    console.log(response);
    callback(null, response);
  }).catch((response) => {
    console.error('error getting flight in server', response);
    callback(response, null);
  });
};

// returns flight based on locations (current and destination), departure date, number of adults
// FOR round trips
// departure date format is 'YYYY-MM-DD"

const getFlightsRoundTrip = (currentLocationCode, destinationLocationCode, departureDate, numberOfAdults, returnDate, callback) => {
  amadeus.shopping.flightOffersSearch.get({
    currentLocationCode,
    destinationLocationCode,
    departureDate,
    numberOfAdults,
    returnDate,
  }).then((response) => {
    console.log(response);
    callback(null, response);
  }).catch((response) => {
    console.error('error getting flight in server', response);
    callback(response, null);
  });
};

module.exports = {
  getFlightsRoundTrip, getFlightsOneWay, getFlightInspiration,
};
