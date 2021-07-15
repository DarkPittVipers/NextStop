// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// eslint-disable-next-line no-unused-vars
const useStyles = makeStyles((theme) => ({
  flightContainer: {
    backgroundColor: 'blue',
    height: '71vh',
    width: '88vw',
    padding: '0px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Oswald", sans-serif',
    color: 'black',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
  },
}));

export default function Flights() {
  const classes = useStyles();
  return (
    <div className={classes.flightContainer}>
      flight stuff
    </div>
  );
}
