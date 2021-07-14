import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const useStyles = makeStyles((theme) => ({
  root: {
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

const displaySegments = (itinerary, arriveDepart) => {
  if (itinerary.segments.length === 1) {
    let arrivalTime = itinerary.segments[0][arriveDepart].at;
    arrivalTime = arrivalTime.split('T');
    const date = arrivalTime[0];
    const time = arrivalTime[1];
    return `${itinerary.segments[0][arriveDepart].iataCode} @
    ${time} ${date}`;
  }
  if (itinerary.segments.length > 1) {
    itinerary.segments.map((segment) => `${segment[arriveDepart].iataCode} @ ${segment[arriveDepart].at}`);
  }
};

export default function FlightTile({ flight }) {
  const classes = useStyles();

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
                <Typography variant="body2" gutterBottom>
                  Departure:
                  {' '}
                  {displaySegments(flight.itineraries[0], 'departure')}
                  <br />
                  Arrival:
                  {' '}
                  {displaySegments(flight.itineraries[0], 'arrival')}
                </Typography>
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
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
