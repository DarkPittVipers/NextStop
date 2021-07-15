/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
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
import EventForm from './EventForm.jsx';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: 'rgba(0,0,0,.1)',
      outline: '1px solid slategrey',
    },
  },
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
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '10%',
    backgroundColor: 'green',
  },
  entryContainer: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: '90%',
    backgroundColor: 'green',
  },
}));

export default function Events() {
  const classes = useStyles();
  const [eventData, updateEventData] = useState();
  const [category, updateCategory] = useState('NIGHTLIFE');
  // const { latitude, longitude, city } = useContext(DestinationContext);
  const [latitude, updateLatitude] = useState(37.810980);
  const [longitude, updateLongitude] = useState(-122.483716);

  // axios request for event data
  const getEventData = (latitude, longitude, category) => {
    axios.get('/api/events', {
      params: {
        latitude,
        longitude,
        category,
      },
    })
      .then((result) => {
        updateEventData(result.data.data);
        console.log(result.data.data);
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
      <div className={classes.formContainer}>
        <EventForm
          category={category}
          updateCategory={updateCategory}
        />
      </div>
      <div className={classes.entryContainer}>
        {eventData ? eventData.map((event, index) => (
          <Entry
            event={event}
            key={eventData.id}
            category={category}
            tags={event.tags}
            name={event.name}
          />
        )) : null }
      </div>
    </div>
  );
}
