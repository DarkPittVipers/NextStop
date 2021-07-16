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
    margin: 'auto',
    width: '100%',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function FlightTile({ flight }) {
  const classes = useStyles();
  const [fav, setFav] = useState(false);
  const { setFavorites, favorites } = useContext(AppContext);

  const displaySegments = (itineraries) => {
    const displayBlock = [];
    itineraries.forEach((itinerary, index) => {
      displayBlock[index] = itinerary.segments.map((segment) => (
        <Typography variant="body2" gutterBottom>
          {`Departure: ${segment.departure.iataCode} ${new Date(segment.departure.at)}`}
          <br />
          {`Arrival: ${segment.arrival.iataCode} ${new Date(segment.arrival.at)}`}
        </Typography>
      ));
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

  useEffect(() => {

  }, [displaySegments]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
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
                $
                {flight.price.base}
              </Typography>
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
