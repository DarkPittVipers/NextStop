import React, { useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Paper, Typography, ButtonBase, Fab,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

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

  const displaySegments = (itinerary, arriveDepart) => {
    itinerary.segments.map((segment) => {
      const arrivalTime = segment[arriveDepart].at;
      const date = new Date(arrivalTime);
      return (
        console.log('segment', segment[arriveDepart].iataCode, date)
      );
    });
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
              <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  Standard license
                </Typography>
                {flight.itineraries.length < 2 ? (
                  <Typography variant="body2" gutterBottom>
                    Departure:
                    {' '}
                    {displaySegments(flight.itineraries[0], 'departure')}
                    <br />
                    Arrival:
                    {' '}
                    {displaySegments(flight.itineraries[0], 'arrival')}
                  </Typography>
                ) : (
                  <>
                    <Typography variant="body2" gutterBottom>
                      Departure:
                      {' '}
                      {displaySegments(flight.itineraries[0], 'departure')}
                      <br />
                      Arrival:
                      {' '}
                      {displaySegments(flight.itineraries[0], 'arrival')}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      `Departure:
                      {displaySegments(flight.itineraries[1], 'departure')}
                      `
                      <br />
                      Arrival:
                      {' '}
                      {displaySegments(flight.itineraries[1], 'arrival')}
                    </Typography>
                  </>
                )}
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
                    console.log(flight);
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
