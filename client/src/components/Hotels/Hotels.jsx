import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HotelController from './HotelController.jsx';
import HotelTile from './HotelTile.jsx';

const useStyles = makeStyles(() => ({
  hotelContainer: {
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

export default function Hotels() {
  const classes = useStyles();
  return (
    <div className={classes.hotelContainer}>
      <HotelController />
      <HotelTile />
    </div>
  );
}
