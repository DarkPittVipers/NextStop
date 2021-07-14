import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import useStyles from '../TabStyle.jsx'
import FlightController from './FlightController.jsx';
import FlightTile from './FlightTile.jsx';

export default function Flights() {
  const [flights, setFlights] = useState([]);
  const [nonStop, setNonStop] = useState(false);
  const [roundTrip, setRoundTrip] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    console.log(flights);
  }, [flights]);
  return (
    <div className={classes.tabContainer}>
      <FlightController flights={flights} setFlights={setFlights}
        nonStop={nonStop} setNonStop={setNonStop} roundTrip={roundTrip} setRoundTrip={setRoundTrip}
      />
      {flights.length === 0 ? <CircularProgress />
        : flights.map((flight) => {
          if (nonStop === true) {
            return <FlightTile key={flight.id} flight={flight} />;
          }
          if ((flight.itineraries[0].segments.length < 2)
            || (flight.itineraries[1].segments.length < 2)) {
            return <FlightTile key={flight.id} flight={flight} />;
          }
        })}
    </div>
  );
}
