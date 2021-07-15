import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import useStyles from '../TabStyle.jsx';
import HotelDatePicker from './HotelDatePicker.jsx';

export default function HotelController({ setHotels, hotelInfo, setHotelInfo }) {
  const classes = useStyles();

  const getHotels = () => {
    axios.get('/api/hotels', {
      params: {
        cityCode: hotelInfo.cityCode,
        checkInDate: hotelInfo.checkInDate,
        checkOutDate: hotelInfo.checkOutDate,
        adults: hotelInfo.adults,
      },
    })
      .then((response) => {
        setHotels(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onHotelInfoChange = (input) => (e) => {
    setHotelInfo({
      ...hotelInfo,
      [input]: e.target.value,
    });
  };

  return (
    <div className={classes.controlBar}>
      <TextField
        label="Destination"
        id="destination-hotel"
        placeholder="Where to?"
        onChange={onHotelInfoChange('cityCode')}
        variant="outlined"
        defaultValue={hotelInfo.cityCode}
        size="small"
      />
      <TextField
        label="Guests"
        id="guests-hotel"
        type="number"
        onChange={onHotelInfoChange('adults')}
        placeholder="How Many Of Ya?"
        variant="outlined"
        defaultValue={hotelInfo.adults}
        size="small"
      />

      <HotelDatePicker hotelInfo={hotelInfo} />

      <Button
        variant="outlined"
        onClick={(e) => {
          e.preventDefault();
          getHotels();
        }}
      >
        Go
      </Button>
    </div>
  );
}
