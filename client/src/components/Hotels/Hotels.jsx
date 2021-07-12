import React, { useContext, useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hotelContainer: {
    backgroundColor: '#f7fff7',
    borderBottom: '2px solid #f7fff7',
    height: '71vh',
    width: '88vw',
    padding: '10px 30px',
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

export default function Hotels() {
  const classes = useStyles();
  return (
    <div className={classes.hotelContainer}>
      HOTEL STUFF
    </div>
  );
}
