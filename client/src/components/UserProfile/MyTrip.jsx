import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
} from '@material-ui/core';

import userProStyles from './UserProStyles.jsx';

// IMPORT MODALS
import BookEvent from './BookingModals/BookEvent.jsx';
import FlightTile from './Tiles/FlightTile.jsx';
import HotelTile from './Tiles/HotelTile.jsx';

export default function MyTrip({eventInfo, hotelInfo, flightInfo, userInfo}) {
  const classes = userProStyles();
  const [flightBookInfo, setBookFlightInfo] = useState({ email: '', name: '' });
  const [eventBookInfo, setBookEventInfo] = useState({ email: '', name: '' });
  const [hotelBookInfo, setHotelBookInfo] = useState();


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
        <HotelTile userInfo={userInfo} hotelBookInfo={hotelBookInfo} />
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.myTripFlights}
      >
        Flights
        <FlightTile userInfo={userInfo} hotelBookInfo={hotelBookInfo} />
      </Grid>
    </Grid>
  );
}

MyTrip.propTypes = {

};

MyTrip.defaultProps = {
};
