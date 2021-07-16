// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
// eslint-disable-next-line import/no-named-as-default-member
import Entry from './Entry.jsx';
import EventForm from './EventForm.jsx';
import { AppContext } from '../../helpers/context';

// eslint-disable-next-line no-unused-vars
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
  formContainer: {
    display: 'flex',
    flexDirection: 'row',
    height: '10%',
  },
  entryContainer: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: '90%',
    width: '100%',
  },
}));

export default function Events() {
  const classes = useStyles();
  const [eventData, updateEventData] = useState();
  const [category, updateCategory] = useState('NIGHTLIFE');
  const { currentDestination } = useContext(AppContext);

  // axios request for event data
  // eslint-disable-next-line no-shadow
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
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('err getting event data in client', err);
      });
  };

  useEffect(() => {
    if (currentDestination) {
      getEventData(currentDestination.lat, currentDestination.lng, category);
    }
  }, [currentDestination, category]);

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
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            event={event}
            category={category}
            tags={event.tags}
            name={event.name}
          />
        )) : null }
      </div>
    </div>
  );
}
