import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {
  Grid, Button,
} from '@material-ui/core';

import userProStyles from './UserProStyles.jsx';
import { AppContext } from '../../helpers/context';

// IMPORT COMPONENTS
import Budget from './Budget.jsx';
import MyTrip from './MyTrip.jsx';

export default function UserProfile({ user }) {
  const { favorites } = useContext(AppContext);
  const classes = userProStyles();
  const [flightInfo, setFlightInfo] = useState({});
  const [hotelInfo, setHotelInfo] = useState({});
  const [eventInfo, setEventInfo] = useState({});
  const [flightsTotPrice, setFlightsTotPrice] = useState('5.5');
  const [eventsTotPrice, setHotelTot] = useState('100.88');
  const [hotelsTotPrice, setHotelsTot] = useState('6.7');

  const getFlightsHotels = () => axios.get('/user/trip')
    .then((res) => {
    setFlightInfo(res);
    setHotelInfo(res);
    setEventInfo(res);
    console.log('RES', res);
  });

  useEffect(() => {
    getFlightsHotels()
      .then(() => {
        console.log('FLIGHTINFO', flightInfo);
        console.log('FAVORITES', favorites);
      });
  }, [favorites]);
  return (
    <Grid
      container
      spacing={2}
      className={classes.profileContainer}
    >
      <Grid
        xs={6}
        item
        className={classes.leftContainer}
      >
        <Grid
          item
          xs={12}
          className={classes.profile}
        >
          <Grid
            item
            xs={6}
            className={classes.userName}
          >
            Username:
            &nbsp;
            {user}
          </Grid>
          <Grid
            item
            xs={6}
            className={classes.profilePic}
          >
            <img className={classes.profilePic} src="assets/png.png" alt="Broken Profile Pic" />

          </Grid>

        </Grid>

        <Budget
          flightsTotPrice={flightsTotPrice}
          eventsTotPrice={eventsTotPrice}
          hotelsTotPrice={hotelsTotPrice}
        />

      </Grid>

      <Grid
        item
        xs={6}
        className={classes.rightContainer}
      >
        <MyTrip />

        <Grid
          item
          className={classes.logOutBtn}
        >
          <a
            href="/logout"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button>
              Log Out
            </Button>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}

UserProfile.propTypes = {
  user: PropTypes.string,
};

UserProfile.defaultProps = {
  user: '',
};
