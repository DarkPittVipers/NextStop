const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const { requiresAuth } = require('express-openid-connect');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
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

app.use('/api/events', routes.events.router);
app.use('/api/hotels', routes.hotels.router);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

const port = 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
