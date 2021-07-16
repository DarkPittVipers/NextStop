const db = require('../index');
// eslint-disable-next-line no-unused-vars
const City = require('../models/cities');
const Airline = require('../models/airlines');
// eslint-disable-next-line no-unused-vars
const cities = require('../closestAirports');
// eslint-disable-next-line no-unused-vars
const airlines = require('../airCarrierCodes');

// db.then(() => {
//   Airline.create(airlines)
//     .then((docs) => {
//       console.log('Added Airlines');
//     })
//     .catch((err) => console.log(err));
// })
// .catch((err) => console.log(err));

db.then(() => {
  Airline.findOne({ iata: 'AS' })
    .then((doc) => {
      // eslint-disable-next-line no-console
      console.log('Airline: ', doc);
    })
    // eslint-disable-next-line no-console
    .catch((err) => console.log(err));
})
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));

// db.then(() => {
//   City.create({ city_ascii: partialQuery })
//     .then((docs) => {
//       console.log('Cities: ', docs);
//     })
//     .catch((err) => console.log(err));
// })
// .catch((err) => console.log(err));

// db.then(() => {
//     const partialQuery = new RegExp('tok', 'i');
//     City.find({ city_ascii: partialQuery })
//       .then((docs) => {
//         console.log('Cities: ', docs);
//       })
//       .catch((err) => console.log(err));
//   })
//   .catch((err) => console.log(err));
