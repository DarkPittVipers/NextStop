/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BookFlight from '../BookingModals/BookFlight.jsx';

const useStyles = makeStyles(() => ({
  flightContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  flightTile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
  },
  flightBtns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}));

export default function FlightTile({ flight }) {
  const classes = useStyles();

  const deleteFlightBooking = (flightID) => axios.delete(`/user/flights?id=${flightID}`).then((res) => res.data).then(console.log('Delete FLights clicked'));

  return (
    <div className={classes.flightContainer}>
      {flight ? (
        <div className={classes.flightTile}>

          <div>
            <b>Itineraries:</b>
          </div>
          {flight.itineraries.map((trip) => (
            <div key={trip._id}>
              {trip.segments.map((seg) => (
                <div key={seg._id} >
                  <div>{`Departure: ${seg.departure.iataCode}`}</div>
                  <div>{`Departure Time: ${seg.departure.at}`}</div>
                  <div>{`Arrival: ${seg.arrival.iataCode}`}</div>
                  <div>{`Arrival Time: ${seg.arrival.at}`}</div>
                  <div>
                    <b>Airline:</b>
                    {` ${seg.carrierCode}`}
                  </div>
                </div>
              ))}
            </div>
          ))}
          <div>
            <b>Price:</b>
            {' '}
            {flight.price.total}
          </div>
          <div className={classes.flightBtns}>
            <BookFlight flight={flight} />
            <Button
              variant="outlined"
              onClick={() => {
                deleteFlightBooking(flight._id);
              }}
              color="primary"
            >
              Delete
            </Button>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

FlightTile.propTypes = {
  flight: PropTypes.shape({
    itineraries: PropTypes.arrayOf(

    ),
  }),
};

FlightTile.defaultProps = {
  flight: [
    { _id: 'Invalid ID' },
  ],
};
