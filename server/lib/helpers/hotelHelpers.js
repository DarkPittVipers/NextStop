const Amadeus = require('amadeus');

const amadeus = new Amadeus();

// Get list of Hotels by city code, check in date, check out date, number of people
// date format Format YYYY-MM-DD
// can be from 1-9 adults

const getHotels = (cityCode, checkInDate, checkOutDate, adults, callback) => {
  amadeus.shopping.hotelOffers.get({
    cityCode,
    checkInDate,
    checkOutDate,
    adults,
  }).then((response) => {
    console.log(response);
    callback(null, response);
  }).catch((response) => {
    console.error('error getting hotels in server', response);
    callback(response, null);
  });
};

module.exports = {
  getHotels,
};
