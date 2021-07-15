import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../helpers/context';
import { CircularProgress } from '@material-ui/core';
import useStyles from '../TabStyle.jsx';
import HotelController from './HotelController.jsx';
import HotelTile from './HotelTile.jsx';

export default function Hotels() {
  const { hotels, setHotels } = useContext(AppContext);
  const [hotelInfo, setHotelInfo] = useState({
    cityCode: '',
    checkInDate: '',
    checkOutDate: '',
    adults: null,

  });
  const classes = useStyles();
  useEffect(() => {
  }, [hotels]);
  return (
    <div className={classes.tabContainer}>
      <HotelController hotelInfo={hotelInfo} setHotels={setHotels}
        setHotelInfo={setHotelInfo} hotels={hotels}
      />
      {hotels.length === 0 ? null
        : hotels.map((hotel) => {
          return <HotelTile key={hotel.hotel.hotelId} hotel={hotel} />;
        })}
    </div>
  );
}
