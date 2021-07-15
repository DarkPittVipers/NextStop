/* eslint-disable no-console */
const express = require('express');
const userInViews = require('../lib/middleware/userInViews');
const User = require('../database/models/user');
const Hotel = require('../database/models/hotels');
const Flight = require('../database/models/flights');
const Event = require('../database/models/events');

const router = express.Router();

router.get('/userdata', userInViews(), (req, res) => {
  if (req.user) {
    res.status(200).send(req.user);
  } else {
    res.status(401).send(null);
  }
});

router.get('/user/trip', (req, res) => {
  if (req.user) {
    const tripData = {};
    const query = Flight.find({ userId: req.user.id }).exec();

    query.then((flights) => {
      tripData.flights = flights;
      return Hotel.find({ userId: req.user.id }).exec();
    })
      .then((hotels) => {
        tripData.hotels = hotels;
        return Event.find({ userId: req.user.id }).exec();
      })
      .then((events) => {
        tripData.events = events;
        res.status(200).send(tripData);
      })
      .catch((err) => console.error(err));
  } else {
    res.status(401).send();
  }
});

router.put('/user/budget', (req, res) => {
  if (req.user) {
    const query = User.find({ id: req.user.id }).exec();

    query.then((user) => {
      // eslint-disable-next-line no-param-reassign
      user.budget = req.query.budget;
      return user.save();
    })
      .then((user) => {
        res.status(200).send(user);
      })
      .catch((err) => console.error(err));
  } else {
    res.status(401).send();
  }
});

router.put('/user/events', (req, res) => {
  if (req.user) {
    const { body } = req;
    body.userId = req.user.user_id;
    Event.create(body)
      .then((event) => {
        res.status(200).send(event);
      })
      .catch((err) => console.error(err));
  } else {
    res.status(401).send();
  }
});

router.put('/user/flights', (req, res) => {
  if (req.user) {
    const { body } = req;
    body.userId = req.user.user_id;
    Flight.create(body)
      .then((event) => {
        res.status(200).send(event);
      })
      .catch((err) => console.error(err));
  } else {
    res.status(401).send();
  }
});

router.put('/user/hotels', (req, res) => {
  if (req.user) {
    const { body } = req;
    body.userId = req.user.user_id;
    Hotel.create(body)
      .then((event) => {
        res.status(200).send(event);
      })
      .catch((err) => console.error(err));
  } else {
    res.status(401).send();
  }
});

module.exports = router;
