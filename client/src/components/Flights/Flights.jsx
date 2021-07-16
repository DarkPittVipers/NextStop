/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useEffect, useState, useContext } from 'react';
import { CircularProgress } from '@material-ui/core';
import useStyles from '../TabStyle.jsx';
import { AppContext } from '../../helpers/context';
import FlightController from './FlightController.jsx';
import FlightTile from './FlightTile.jsx';

export default function Flights() {
  const { flights, setFlights } = useContext(AppContext);
  const [roundTrip, setRoundTrip] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    console.log(flights[0]);
  }, [flights]);
  return (
    <div className={classes.tabContainer}>
      <FlightController
        flights={flights}
        setFlights={setFlights}
        roundTrip={roundTrip}
        setRoundTrip={setRoundTrip}
        setLoading={setLoading}
      />
      {
        loading ? <img src="https://i.ibb.co/qdjrmWW/planespinner.gif" alt="planespinner" height="60%" border="0" />
          : flights.length > 0 ? flights.map((flight) => (
            <FlightTile
              key={flight.id}
              flight={flight}
            />

          ))
            : <p>Enter some data</p>
      }
    </div>
  );
}
