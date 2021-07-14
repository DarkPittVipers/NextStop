const express = require('express');
const userInViews = require('../lib/middleware/userInViews');

const router = express.Router();

router.get('/userdata', userInViews(), (req, res) => {
  if (req.user) {
    res.status(200).send(req.user);
  } else {
    res.status(200).send(null);
  }
});

module.exports = router;
