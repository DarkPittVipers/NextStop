import React, { useContext, useState } from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  eventContainer: {
    backgroundColor: '#f7fff7',
    borderBottom: '2px solid #f7fff7',
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
    overflow: 'auto',
  },
  controlBar: {
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
  },
}));

export default function EventController() {
  const classes = useStyles();
  return (
    <div className={classes.controlBar}>
      <TextField
        label="Size"
        id="outlined-size-small"
        variant="outlined"
        placeholder="Search Events"
        size="small"
      />
    </div>
  );
}
