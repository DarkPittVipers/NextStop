const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { match, RoutingContext } = require('react-router');
// eslint-disable-next-line no-unused-vars
const db = require('./database');
const routes = require('./routes');

if (process.env.NODE_ENV !== 'testing') {
  // eslint-disable-next-line global-require
  require('dotenv').config();
}

const app = express();

// auth0 config
const strategy = new Auth0Strategy(
  {
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    callbackURL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback',
    clientID: process.env.AUTH0_CLIENT_ID,
    domain: process.env.AUTH0_DOMAIN,
  },
  (accessToken, refreshToken, extraParams, profile, done) => done(null, profile),
);

// config express-session
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
};

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

passport.use(strategy);

app.use(session(sess));
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/events', routes.events);
app.use('/api/hotels', routes.hotels);
app.use('/', routes.auth);
app.use('/', routes.users);
app.use('/', routes.home);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// req.isAuthenticated is provided from the auth router
app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      // eslint-disable-next-line max-len
      // eslint-disable-next-line react/react-in-jsx-scope, react/jsx-filename-extension, react/jsx-props-no-spreading
      const html = renderToString(<RoutingContext {...renderProps} />);
      res.status(200).send(html);
    } else {
      res.status(404).send('Not found');
    }
  });
});

module.exports = app;
