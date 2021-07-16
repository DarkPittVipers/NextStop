import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Grid, Button } from '@material-ui/core';

import userProStyles from './UserProStyles.jsx';

// IMPORT CONTEXT
import { AppContext, FlightContext } from '../../helpers/context';

// IMPORT COMPONENTS
import Budget from './Budget.jsx';
import MyTrip from './MyTrip.jsx';

export default function UserProfile({ user }) {
  const { favorites } = useContext(AppContext);
  const classes = userProStyles();

  const [flightInfo, setFlightInfo] = useState([]);
  const [hotelInfo, setHotelInfo] = useState([]);
  const [eventInfo, setEventInfo] = useState([]);
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const getFlightsHotels = () => axios.get('/user/trip').then((res) => {
    if (res.data.flights) {
      setFlightInfo([...res.data.flights]);
    } if (res.data.hotels) {
      setHotelInfo([...res.data.hotels]);
    } if (res.data.events) {
      setEventInfo([...res.data.events]);
    }
    console.log('RES', res.data);
  });

  const getAllHotels = () => axios.get('/user/trip').then((res) => {
    if (res.data.hotels) {
      setHotelInfo(...res.data.hotels);
    }
  });

  useEffect(() => {
    getFlightsHotels();
  }, []);

  useEffect(() => {
    getFlightsHotels();
  }, [favorites]);

  // -----------------------------------CONSOLE LOGS-------------
  // console.log('FLIGHTINFO', flightInfo);
  // console.log('HOTELINFO', hotelInfo);
  // console.log('FAVORITES', favorites);
  // console.log('TOTSTATE', flightsTotPrice);

  return (
    <FlightContext.Provider value={{
      setTitle,
      setFirstName,
      setLastName,
      setEmail,
      title,
      firstName,
      lastName,
      email,
      hotelInfo,
    }}
    >
      <Grid container spacing={2} className={classes.profileContainer}>
        <Grid xs={6} item className={classes.leftContainer}>
          <Grid item xs={12} className={classes.profile}>
            <Grid item xs={6} className={classes.userName}>
              Username: &nbsp;
              {user}
            </Grid>
            <Grid item xs={6} className={classes.profilePic}>
              <img
                className={classes.profilePic}
                src="assets/png.png"
                alt="Broken Profile Pic"
              />
            </Grid>
          </Grid>

          <Budget
            flightInfo={flightInfo}
            eventInfo={eventInfo}
            hotelInfo={hotelInfo}
          />
        </Grid>

        <Grid item xs={6} className={classes.rightContainer}>
          <MyTrip
            flightInfo={flightInfo}
            eventInfo={eventInfo}
            hotelInfo={hotelInfo}
            getAllHotels={getAllHotels}
          />

          <Grid item className={classes.logOutBtn}>
            <a
              href="/logout"
              style={{
                textDecoration: 'none',
              }}
            >
              <Button>Log Out</Button>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </FlightContext.Provider>
  );
}

UserProfile.propTypes = {
  user: PropTypes.string,
};

UserProfile.defaultProps = {
  user: '',
};
