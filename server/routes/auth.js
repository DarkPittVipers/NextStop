const express = require('express');
const passport = require('passport');
const util = require('util');
const url = require('url');
const querystring = require('querystring');
const User = require('../database/models/user');

const router = express.Router();

if (process.env.NODE_ENV !== 'testing') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

// Perform the login, after login Auth0 will redirect to callback
router.get('/login', passport.authenticate('auth0', {
  scope: 'openid email profile',
}), (req, res) => {
  res.redirect('/');
});

// Perform the final stage of authentication and redirect to previously requested URL or '/user'
router.get('/callback', (req, res, next) => {
  // eslint-disable-next-line consistent-return
  passport.authenticate('auth0', (err, user) => {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/login'); }
    const { _raw, _json, ...userProfile } = user;
    // eslint-disable-next-line consistent-return
    req.logIn(user, (err2) => {
      if (err2) { return next(err2); }
      const { returnTo } = req.session;
      delete req.session.returnTo;

      const query = User.findOneAndUpdate({ id: user.id }, userProfile, {
        new: true,
        upsert: true,
        rawResult: false,
      });

      query.exec()
        // eslint-disable-next-line no-unused-vars
        .then((doc) => {
          res.redirect(returnTo || '/');
        })
        // eslint-disable-next-line no-console
        .catch((error) => console.error(error));
    });
  })(req, res, next);
});

// Perform session logout and redirect to homepage
router.get('/logout', (req, res) => {
  req.logout();

  let returnTo = `${req.protocol}://${req.hostname}`;
  const port = req.connection.localPort;
  if (port !== undefined && port !== 80 && port !== 443) {
    returnTo += `:${port}`;
  }
  const logoutURL = new url.URL(
    util.format('https://%s/v2/logout', process.env.AUTH0_DOMAIN),
  );
  const searchString = querystring.stringify({
    client_id: process.env.AUTH0_CLIENT_ID,
    returnTo,
  });
  logoutURL.search = searchString;

  res.redirect(logoutURL);
});

module.exports = router;