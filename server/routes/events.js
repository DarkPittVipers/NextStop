const express = require('express');

const router = express.Router();

// Get request for a question with a default page of 1
router.get('/', (req, res) => {
  res.status(200).send([{ id: 0, url: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png' }]);
});

module.exports.router = router;
