import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
} from '@material-ui/core';

import userProStyles from './UserProStyles.jsx';

// IMPORT MODALS
import BookEvent from './BookingModals/BookEvent.jsx';
import FlightTile from './Tiles/FlightTile.jsx';
import HotelTile from './Tiles/HotelTile.jsx';
import EventTile from './Tiles/EventTile.jsx';

export default function MyTrip({ getAllHotels, eventInfo, hotelInfo, flightInfo }) {
  const classes = userProStyles();
  const [hotelOptions, setHotelOptions] = useState([]);
  const [eventOptions, setEventOptions] = useState([]);
  const [flightOptions, setFlightOptions] = useState([]);

  useEffect(() => {
    if (hotelInfo) {
      setHotelOptions([...hotelOptions, hotelInfo]);
    }
  }, [hotelInfo]);

  useEffect(() => {
    if (flightInfo) {
      setFlightOptions([...flightOptions, flightInfo]);
    }
  }, [flightInfo]);

  useEffect(() => {
    if (eventInfo) {
      setEventOptions([...eventOptions, eventInfo]);
    }
  }, [eventInfo]);

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
        <div className={classes.eventTitle}>
          <b>Events</b>
        </div>
        <BookEvent eventInfo={eventInfo} />
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.myTripEvents}
      >
        <div className={classes.hotelTitle}>
          <b>Hotels</b>
        </div>
        { hotelInfo.length > 0 ? hotelInfo.map((option) => (
          <HotelTile key={option._id} option={option} getAllHotels={getAllHotels} />
        )) : <div /> }
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.myTripFlights}
      >
        <div className={classes.flightTitle}>
          <b>Flights</b>
        </div>
        { flightInfo.length > 0 ? flightInfo.map((option, index) => (
          <FlightTile key={index} option={option} />
        )) : <div /> }
      </Grid>
    </Grid>
  );
}

MyTrip.propTypes = {

};

MyTrip.defaultProps = {
};
