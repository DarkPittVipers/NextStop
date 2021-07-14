import React, { useState, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import useStyles from '../TabStyle.jsx';
import HotelController from './HotelController.jsx';
import HotelTile from './HotelTile.jsx';

export default function Hotels() {
  const [hotelInfo, setHotelInfo] = useState({
    cityCode: '',
    checkInDate: '',
    checkOutDate: '',
    adults: null,

  });
  const [hotels, setHotels] = useState([]);
  const classes = useStyles();
  useEffect(() => {
    console.log(hotels);
  }, [hotels]);
  return (
    <div className={classes.tabContainer}>
      <HotelController hotelInfo={hotelInfo} setHotels={setHotels} hotels={hotels} />
      {hotels.length === 0 ? <CircularProgress />
        : hotels.map((hotel) => {
          return <HotelTile key={hotel.hotel.hotelId} hotel={hotel} />;
        })}
    </div>
  );
}
