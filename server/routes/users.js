const express = require('express');
// const UserProfile = require('../../client/src/components/UserProfile/UserProfile.jsx');
const secured = require('../lib/middleware/secured');

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

module.exports = router;
