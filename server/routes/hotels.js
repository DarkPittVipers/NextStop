/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
const express = require('express');
const Card = require('../database/models/card');

const router = express.Router();

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
