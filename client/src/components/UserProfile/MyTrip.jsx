import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
} from '@material-ui/core';

import userProStyles from './UserProStyles.jsx';

// IMPORT MODALS
import BookFlight from './BookingModals/BookFlight.jsx';
import BookHotel from './BookingModals/BookHotel.jsx';
import BookEvent from './BookingModals/BookEvent.jsx';

export default function MyTrip({}) {
  const classes = userProStyles();
  const [flightInfo, setFlightInfo] = useState({ email: '', name: '' });
  const [hotelInfo, setHotelInfo] = useState({ email: '', name: '' });
  const [eventInfo, setEventInfo] = useState({ email: '', name: '' });

  return (
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
        <BookEvent eventInfo={eventInfo} />
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.myTripHotels}
      >
        Hotels
        <BookHotel hotelInfo={hotelInfo} />
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.myTripFlights}
      >
        Flights
        <BookFlight flightInfo={flightInfo} />
      </Grid>
    </Grid>
  );
}

MyTrip.propTypes = {

};

MyTrip.defaultProps = {
};
