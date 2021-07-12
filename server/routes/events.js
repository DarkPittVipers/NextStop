const express = require('express');
const Amadeus = require('amadeus');

const router = express.Router();
<<<<<<< HEAD
// const amadeus = new Amadeus();
=======
const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET,
});
>>>>>>> fec8110f9a0b0532b7fb2087029162c6502a382b

// // Returns activities for a location in Barcelona based on geolocation coordinates
// router.get('/events', (req, res) => {
//   amadeus.shopping.activities.get({
//     latitude: req.params.latitude,
//     longitude: req.params.longitude,
//   }).then((response) => {
//     console.log(response);
//     res.status(200).send(response);
//   }).catch((err) => {
//     console.log(err);
//     res.status(500).send(err);
//   });
// });

module.exports = router;
