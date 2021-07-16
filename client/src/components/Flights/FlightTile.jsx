import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Paper, Typography, ButtonBase, Fab,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { AppContext } from '../../helpers/context';

const useStyles = makeStyles((theme) => ({
  root: {
    top: '20px',
    flexGrow: 1,
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    margin: '1',
    width: '100%',
  },
  image: {
    width: 140,
    height: 140,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const carrierPhotos = {
  UA: 'https://i.ibb.co/Wz8mMCQ/united-Airlines.jpg',
};

const setPhoto = (carrierCode) => {
  console.log(carrierCode);
  const photos = Object.keys(carrierPhotos);
  for (let i = 0; i < photos.length; i++) {
    if (photos[i] === carrierCode) {
      return carrierPhotos[carrierCode];
    }
    return 'https://i.ibb.co/VMTKtZk/stupidplane.jpg';
  }
};

export default function FlightTile({ flight }) {
  const classes = useStyles();
  const [fav, setFav] = useState(false);
  const { setFavorites, favorites } = useContext(AppContext);

  const displaySegments = (itineraries) => {
    const displayBlock = [];
    itineraries.forEach((itinerary, index) => {
      displayBlock[index] = (
        <div>
          {' '}
          Itinerary
          {index + 1}
          {itinerary.segments.map((segment) => {
            const date = new Date(segment.arrival.at);
            return (
              <Typography variant="body2" gutterBottom>
                <br />
                <i className="fas fa-plane-departure" />
                {`  ${segment.departure.iataCode} ${
                  (date.getMonth() + 1).toString().padStart(2, '0')}/${
                  date.getDate().toString().padStart(2, '0')}/${
                  date.getFullYear().toString().padStart(4, '0')} ${
                  date.getHours().toString().padStart(2, '0')}:${
                  date.getMinutes().toString().padStart(2, '0')}:${
                  date.getSeconds().toString().padStart(2, '0')}`}
                <i className="fas fa-plane-arrival" />
                {`  ${segment.arrival.iataCode} ${
                  (date.getMonth() + 1).toString().padStart(2, '0')}/${
                  date.getDate().toString().padStart(2, '0')}/${
                  date.getFullYear().toString().padStart(4, '0')} ${
                  date.getHours().toString().padStart(2, '0')}:${
                  date.getMinutes().toString().padStart(2, '0')}:${
                  date.getSeconds().toString().padStart(2, '0')}`}
              </Typography>
            );
          })}
        </div>
      );
    });
    return displayBlock;
  };

  const saveFlight = (favFlight) => {
    axios.put('/user/flights', favFlight)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={setPhoto(flight.validatingAirlineCodes[0])} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  United Airlines
                </Typography>
                {displaySegments(flight.itineraries).map((itinerary) => (
                  <div key={itinerary.duration}>{itinerary}</div>
                ))}
                <Typography variant="body2" color="textSecondary">
                  Availabile Seats:
                  {' '}
                  {flight.numberOfBookableSeats}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                ${flight.price.base}
              </Typography>
              <br />
              <br />
              {fav === false ? (
                <Fab
                  aria-label="like"
                  size="small"
                  onClick={(e) => {
                    e.preventDefault();
                    setFav(true);
                    saveFlight(flight);
                    setFavorites([...favorites, flight]);
                    console.log('FLIGHT', flight);
                  }}
                >
                  <FavoriteIcon />
                </Fab>
              ) : (
                <Fab
                  disabled
                  aria-label="like"
                  size="small"
                >
                  <FavoriteIcon />
                </Fab>
              )}

            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
