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
  const [flightInfo, setFlightInfo] = useState([]);
  const [hotelInfo, setHotelInfo] = useState([]);
  const [eventInfo, setEventInfo] = useState([]);
  const [flightsTotPrice, setFlightsTotPrice] = useState(0);
  const [eventsTotPrice, setEventsTotPrice] = useState('100.88');
  const [hotelsTotPrice, setHotelsTotPrice] = useState('6.7');
  const [userInfo, setUserInfo] = useState(
    {
      title: '',
      firstName: '',
      lastName: '',
      email: '',
    })

  const getFlightsHotels = () => axios.get('/user/trip')
    .then((res) => {
    setFlightInfo(...res.data.flights);
    setHotelInfo(...res.data.hotels);
    setEventInfo(...res.data.events);
    console.log('RES', res.data);
  });

  const addFlightsHotelsEventsPrices = () => axios.get('/user/trip')
  // let flightTotalPrice =  flightsTotPrice;
    .then((res) => {
      for (let i = 0; i < res.data.flights.length; i += 1) {
        flightsTotPrice += parseFloat(res.data.flights[i].price.total);

        console.log('total', res.data.flights[i].price.total);

      }
      // setHotelsTotPrice();
      // setEventsTotPrice();
      setFlightsTotPrice(flightTotalPrice);
      console.log('totalState', flightsTotPrice);
    });

  useEffect(() => {
    getFlightsHotels()
    addFlightsHotelsEventsPrices()
  //}, [flightInfo]);
   }, [favorites]);

    console.log('FLIGHTINFO', flightInfo)
    console.log('FAVORITES', favorites)
    console.log('TOTSTATE', flightsTotPrice)

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

        <MyTrip
          flightInfo={flightInfo}
          eventInfo={eventInfo}
          hotelInfo={hotelInfo}
          userInfo={userInfo}
        />

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
