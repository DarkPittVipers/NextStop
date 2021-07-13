const express = require('express');
const secured = require('../lib/middleware/secured');
const userInViews = require('../lib/middleware/userInViews');

const router = express.Router();

router.get('/profile', secured(), (req, res) => {
  // TODO display user profile page
  res.status(200).send(
    `<!DOCTYPE html>
    <html>
      <body>
        Profile Page
        <a href="/">Home</a>
      </body>
    </html>`,
  );
});

router.get('/userdata', userInViews(), (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
