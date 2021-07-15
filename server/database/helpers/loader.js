const db = require('../index');
const City = require('../models/cities');
const Airline = require('../models/airlines');
const cities = require('../closestAirports');
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
        console.log('Airline: ', doc);
      })
      .catch((err) => console.log(err));
  })
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
