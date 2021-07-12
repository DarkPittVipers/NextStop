const express = require('express');
const secured = require('../lib/middleware/secured');

const router = express.Router();

router.get('/user', secured(), (req, res) => {
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

module.exports = router;
