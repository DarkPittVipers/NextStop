import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import DatePicker from './DatePicker.jsx';

const useStyles = makeStyles((theme) => ({
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
  controlBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
  },
  dateBar: {
    width: '40px',
  },
}));

export default function HotelController() {
  const classes = useStyles();
  return (
    <div className={classes.controlBar}>
      <TextField
        label="Destination"
        id="destination-hotel"
        placeholder="Where to?"
        variant="outlined"
        defaultValue={null}
        size="small"
      />
      <TextField
        label="Guests"
        id="guests-hotel"
        type="number"
        placeholder="How Many Of Ya?"
        variant="outlined"
        defaultValue={null}
        size="small"
      />

      <DatePicker />

      <Button
        variant="outlined"
      >
        Go
      </Button>
    </div>
  );
}
