import React, { useState, useContext } from 'react';
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
  for (let i = 0; i < photos.length; i += 1) {
    if (photos[i] === carrierCode) {
      return carrierPhotos[carrierCode];
    }
  }
  return 'https://i.ibb.co/VMTKtZk/stupidplane.jpg';
};

export default function FlightTile({ flight }) {
  const classes = useStyles();
  const [fav, setFav] = useState(false);
  const { setFavorites, favorites } = useContext(AppContext);

  const formatFlightDate = (flightDate) => {
    const date = new Date(flightDate.at);
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const dayOfMonth = date.getDate().toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    return `  ${flightDate.iataCode} ${month}/${dayOfMonth}/${year} ${hours}:${minutes}:${seconds}`;
  };

  const displaySegments = (itineraries) => {
    const displayBlock = [];
    itineraries.forEach((itinerary, index) => {
      displayBlock[index] = (
        <div>
          {`Itinerary ${index + 1}`}
          {itinerary.segments.map((segment) => (
            <Typography variant="body2" gutterBottom>
              <br />
              <i className="fas fa-plane-departure" />
              {formatFlightDate(segment.departure)}
              <i className="fas fa-plane-arrival" />
              {formatFlightDate(segment.arrival)}
            </Typography>
          ))}
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
                  {flight.validatingAirlineCodes[0] === 'UA' ? 'United Airlines' : 'Some Airlines Name'}
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
