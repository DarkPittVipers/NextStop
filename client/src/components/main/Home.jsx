import React from 'react';
import PropTypes from 'prop-types';

import { Container } from '@material-ui/core';

import Card from './main/Card.jsx';
import CardDialog from './modals/CardDialog.jsx';

export default function Home({ cards }) {
  return (
    <Container className="qaContainer" style={{ margin: '10px 0px 10px 0px', padding: 6 }}>
      <CardDialog />
      {/* eslint-disable-next-line no-underscore-dangle */}
      { cards.map((card) => <Card key={card._id} card={card} />) }
    </Container>
  );
}

Home.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string,
    username: PropTypes.string
  }))
};

Home.defaultProps = {
  cards: [{
    id: 0,
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png',
    description: 'Squirtle Placeholder',
    username: 'Username Placeholder'
  }]
};
