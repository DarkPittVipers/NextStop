import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EventController from './EventController.jsx';
import EventTile from './EventTile.jsx';

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
}));

export default function Events() {
  const classes = useStyles();
  return (
    <div className={classes.eventContainer}>
      <EventController />
      <EventTile />
    </div>
  );
}
