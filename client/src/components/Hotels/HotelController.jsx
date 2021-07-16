import React, { useContext } from 'react';
import axios from 'axios';
import { Button, TextField } from '@material-ui/core';
import { AppContext } from '../../helpers/context';
import useStyles from '../TabStyle.jsx';
import HotelDatePicker from './HotelDatePicker.jsx';

export default function HotelController({ setHotels, hotelInfo, setHotelInfo, setLoading }) {
  const classes = useStyles();
  const { currentDestination } = useContext(AppContext);

  const getHotels = () => {
    axios.get('/api/hotels', {
      params: {
        latitude: currentDestination.lat,
        longitude: currentDestination.lng,
        checkInDate: hotelInfo.checkInDate,
        checkOutDate: hotelInfo.checkOutDate,
        adults: hotelInfo.adults,
      },
    })
      .then((response) => {
        setHotels(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
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
          setLoading(true);
          getHotels();
        }}
      >
        Go
      </Button>
    </div>
  );
}
