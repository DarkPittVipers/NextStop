/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  eventContainer: {
    backgroundColor: 'green',
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

export default function Events() {
  const classes = useStyles();
  const [eventData, updateEventData] = useState();
  const [category, updateCategory] = useState();
  const { latitude, longitude, city } = useContext(DestinationContext);

  // axios request for event data
  const getEventData = (latitude, longitude, selection) => {
    axios.get('/api/events', {
      query: {
        latitude,
        longitude,
        selection,
      },
    })
      .then((result) => {
        updateEventData(result.data);
      })
      .catch((err) => {
        console.log('err getting event data in client', err);
      });
  };

  useEffect(() => {
    getEventData(latitude, longitude, category);
  }, [latitude, longitude, category]);

  return (
    <div className={classes.eventContainer}>
      details go here
    </div>
  );
}
