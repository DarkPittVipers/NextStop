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

export default function MyTrip({eventInfo, flightInfo, hotelInfo}) {
  const classes = userProStyles();
  const [flightBookInfo, setBookFlightInfo] = useState({ email: '', name: '' });
  const [hotelBookInfo, setBookHotelInfo] = useState({ email: '', name: '' });
  const [eventBookInfo, setBookEventInfo] = useState({ email: '', name: '' });

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
        <BookEvent eventBookInfo={eventBookInfo} />
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.myTripHotels}
      >
        Hotels
        <BookHotel hotelBookInfo={hotelBookInfo} />
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.myTripFlights}
      >
        Flights
        <BookFlight flightBookInfo={flightBookInfo} />
      </Grid>
    </Grid>
  );
}

MyTrip.propTypes = {

};

MyTrip.defaultProps = {
};
