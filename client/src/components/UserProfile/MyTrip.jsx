/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Grid,
} from '@material-ui/core';

import userProStyles from './UserProStyles.jsx';

// IMPORT MODALS
import FlightTile from './Tiles/FlightTile.jsx';
import HotelTile from './Tiles/HotelTile.jsx';
import EventTile from './Tiles/EventTile.jsx';

export default function MyTrip({
  getAllHotels, eventInfo, hotelInfo, flightInfo, handleEventDelete,
}) {
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
        {eventInfo
          ? <EventTile eventInfo={eventInfo} handleEventDelete={handleEventDelete} />
          : null}
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.myTripEvents}
      >

        <div className={classes.hotelTitle}>
          <b>Hotels</b>
        </div>
        {hotelInfo.length > 0 ? hotelInfo.map((option) => (
          // eslint-disable-next-line no-underscore-dangle
          <HotelTile key={option._id} option={option} getAllHotels={getAllHotels} />
        )) : <div />}

      </Grid>
      <Grid
        item
        xs={12}
        className={classes.myTripFlights}
      >

        <div className={classes.flightTitle}>
          <b>Flights</b>
        </div>
        {flightInfo.length > 0 ? flightInfo.map((flight) => (
          // eslint-disable-next-line no-underscore-dangle
          <FlightTile key={flight._id} flight={flight} />
        )) : <div />}

      </Grid>
    </Grid>
  );
}

MyTrip.propTypes = {
  getAllHotels: PropTypes.func,
  eventInfo: PropTypes.arrayOf(
    PropTypes.shape({ _id: PropTypes.string }),
  ),
  hotelInfo: PropTypes.arrayOf(
    PropTypes.shape({ _id: PropTypes.string }),
  ),
  flightInfo: PropTypes.arrayOf(
    PropTypes.shape({ _id: PropTypes.string }),
  ),
  handleEventDelete: PropTypes.func,
};

MyTrip.defaultProps = {
  getAllHotels: () => { },
  eventInfo: { _id: 'Invalid ID' },
  hotelInfo: { _id: 'Invalid ID' },
  flightInfo: { _id: 'Invalid ID' },
  handleEventDelete: () => { },
};
