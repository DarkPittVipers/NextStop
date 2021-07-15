/* eslint-disable no-trailing-spaces */
/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import Entry from './Entry.jsx';

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
  // const { latitude, longitude, city } = useContext(DestinationContext);
  const [latitude, updateLatitude] = useState(37.810980);
  const [longitude, updateLongitude] = useState(-122.483716);

  // axios request for event data
  const getEventData = (latitude, longitude) => {
    console.log('hitting this');
    axios.get('/api/events', {
      query: {
        latitude,
        longitude,
      },
    })
      .then((result) => {
        console.log('result', result);
        updateEventData(result.data);
      })
      .catch((err) => {
        console.log('err getting event data in client', err);
      });
  };

  useEffect(() => {
    console.log('hitting this');
    getEventData(latitude, longitude);
  }, [latitude, longitude]);

  return (
    <div className={classes.eventContainer}>
      {
        eventData.map((event, index) => (
          <Entry
            key={event.id}
            index={index}
            name={event.name}
            category={event.category}
            rating={rank}
          />
        ))
      }
    </div>
  );
}
