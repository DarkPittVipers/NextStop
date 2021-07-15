import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Grid, Button,
} from '@material-ui/core';

import userProStyles from './UserProStyles.jsx';

export default function UserProfile({ user }) {
  const classes = userProStyles();
  const [eventsTot, setHotelTot] = useState('100.88');
  const [hotelsTot, setHotelsTot] = useState('6.7');
  const [flightsTot, setFlightsTot] = useState(5.4);
  const [total, setTotal] = useState(0);

  const getTotal = (eventTot, flightTot, hotelTot) =>
    (parseFloat(eventTot) + parseFloat(flightTot) + parseFloat(hotelTot)).toFixed(2);

  return (
    <Grid
      container
      spacing={2}
      className={classes.profileContainer}
    >
      <Grid
        xs={6}
        item
        className={classes.leftContainer}
      >
        <Grid
          item
          xs={12}
          className={classes.profile}
        >
          <Grid
            item
            xs={6}
            className={classes.userName}
          >
            Username:
            &nbsp;
            {user}
          </Grid>
          <Grid
            item
            xs={6}
            className={classes.profilePic}
          >
            <img className={classes.profilePic} src="assets/png.png" alt="Broken Profile Pic" />

          </Grid>

        </Grid>
        <Grid
          item
          xs={12}
          className={classes.budget}
        >
          <Grid
            item
            xs={12}
            className={classes.budTitle}
          >
            Budget:
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.budItems}
          >
            <div>
              Events:
            </div>
            <div>
              $
              {eventsTot}
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.budItems}
          >
            <div>
              Hotels:
            </div>
            <div>
              $
              {hotelsTot}
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.budItems}
          >
            <div>
              Flights:
            </div>
            <div>
              $
              {flightsTot}
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.budItems}
          >
            <div>
              Total:
            </div>
            <div>
              $
              {getTotal(eventsTot, flightsTot, hotelsTot)}
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={6}
        className={classes.rightContainer}
      >
        <Grid
          item
          xs={12}
          className={classes.myTrip}
        >
          <Grid
            item
            xs={12}
            className={classes.myTripTitle}
          >
            My Trip List
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.myTripEvents}
          >
            Events
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.myTripHotels}
          >
            Hotels
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.myTripFlights}
          >
            Flights
          </Grid>
        </Grid>
        <Grid
          item
          className={classes.logOutBtn}
        >
          <a
            href="/logout"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button>
              Log Out
            </Button>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}

UserProfile.propTypes = {
  user: PropTypes.string,
};

UserProfile.defaultProps = {
  user: '',
};
