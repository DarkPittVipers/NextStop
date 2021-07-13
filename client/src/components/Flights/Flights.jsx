import React, { useContext, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FlightController from './FlightController.jsx';
import FlightTile from './FlightTile.jsx';
import DatePicker from './DatePicker.jsx';

const useStyles = makeStyles((theme) => ({
  flightContainer: {
    backgroundColor: '#f7fff7',
    borderBottom: '2px solid #f7fff7',
    width: '88vw',
    height: '72vh',
    padding: '10px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Oswald", sans-serif',
    color: 'black',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    overflow: 'auto',
  },
}));

export default function Flights() {
  const [flights, setFlights] = useState([]);

  const classes = useStyles();
  return (
    <div className={classes.flightContainer}>
      <FlightController flights={flights} setFlights={setFlights} />
      <FlightTile />
    </div>
  );
}
