/* eslint-disable no-underscore-dangle */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import { ArrowDropUpRounded, ArrowDropDownRounded } from '@material-ui/icons';

import ArtSection from './ArtSection.jsx';
import CommentList from './CommentList.jsx';
import useStyles from '../styles';
import { likeCard } from '../helpers/cardRequests';

export default function Card({ card }) {
  const [rating, setRating] = useState(card.rating);
  const [liked, setLiked] = useState(0);

  const classes = useStyles();

  const handleLike = (value) => {
    if (liked !== value) {
      likeCard(card._id, value);
      setRating(rating + value);
      setLiked(value);
    } else {
      likeCard(card._id, -value);
      setRating(rating - value);
      setLiked(0);
    }
  };

  return (
    <Container style={{ padding: 0, margin: '10px 0px 100px 0px' }}>
      <Container style={{ padding: '5px 3px', borderRadius: '5px 5px 0px 0px', border: '1px solid #555' }}>
        <ArtSection imageUrl={card.image} />
        <Grid container justify="space-between" style={{ padding: '5px 0px', borderBottom: '1px solid #444' }}>
          <Grid item>
            <Typography className={classes.username}>{card.username}</Typography>
          </Grid>

          <Grid item>
            <Grid container direction="row" alignItems="center">
              <Button
                variant="contained"
                color={liked === 1 ? 'secondary' : 'primary'}
                className={classes.likeButton}
                onClick={() => handleLike(1)}
              >
                <ArrowDropUpRounded style={{ color: '#fff' }} />
              </Button>
              <Typography style={{ margin: '0px 5px' }}>{rating}</Typography>
              <Button
                variant="contained"
                color={liked === -1 ? 'secondary' : 'primary'}
                className={classes.likeButton}
                onClick={() => handleLike(-1)}
              >
                <ArrowDropDownRounded style={{ color: '#fff' }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Typography style={{ margin: 5 }}>{card.description}</Typography>
      </Container>
      <CommentList cardId={card._id} comments={card.comments} />
    </Container>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    username: PropTypes.string,
    rating: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.object),
  }),
};

Card.defaultProps = {
  card: {
    _id: '0',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png',
    description: 'Squirtle Placeholder',
    username: 'Username Placeholder',
    rating: 0,
    comments: [],
  },
};
