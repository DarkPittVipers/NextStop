/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
const express = require('express');
const Amadeus = require('amadeus');
const Card = require('../database/models/card');

const router = express.Router();
const amadeus = new Amadeus();

router.get('/hotels', (req, res) => {
  amadeus.shopping.hotelOffers.get({
    cityCode: req.params.cityCode,
    checkInDate: req.params.checkInDate,
    checkOutDate: req.params.checkOutDate,
    adults: req.params.adults,
  }).then((response) => {
    console.log(response);
    res.status(200).send(response);
  }).catch((err) => {
    console.log('error in server getting flights', err);
    res.status(500).send(err);
  });
});

router.get('/', (req, res) => {
  let { count = 5, page = 0 } = req.query;
  count = Number(count);
  page = Number(page);

  const query = Card.find({}).sort('-createdAt').limit(count).skip(count * page)
    .exec();

  query.then((docs) => {
    res.status(200).send(docs);
  })
    .catch((err) => console.log(err));
});

router.post('/', (req, res) => {
  const { body } = req;
  Card.create(body)
    .then((doc) => {
      res.status(200).send(doc);
    })
    .catch((err) => console.log(err));
});

router.post('/:cardId/comments', (req, res) => {
  const query = Card.findById(req.params.cardId).exec();

  query.then((card) => {
    card.comments.push(req.body);
    return card.save();
  })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => console.log(err));
});

router.put('/:cardId', (req, res) => {
  const query = Card.findById(req.params.cardId).exec();

  query.then((card) => {
    card.rating += Number(req.body.value);
    return card.save();
  })
    .then((card) => {
      res.status(200).send(card);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
