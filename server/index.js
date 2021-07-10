const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// eslint-disable-next-line no-unused-vars
const db = require('./database');
const routes = require('./routes');

const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/events', routes.events.router);
app.use('/api/hotels', routes.hotels.router);

const port = 3000;

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port ${port}`);
});
