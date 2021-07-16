/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */
import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../../helpers/context';
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
  const [loading, setLoading] = useState(false);
  const classes = useStyles();
  useEffect(() => {
  }, [hotels]);
  return (
    <div className={classes.tabContainer}>
      <HotelController
        hotelInfo={hotelInfo}
        setHotels={setHotels}
        setHotelInfo={setHotelInfo}
        hotels={hotels}
        setLoading={setLoading}
      />
      {
        loading ? <img src="https://i.ibb.co/1JZ5jT4/output-onlinegiftools.gif" alt="hotel-loader" height="55%" border="0" />
          : hotels.length > 0 ? hotels.map((hotel) => (
            <HotelTile
              key={hotel.hotel.hotelId}
              hotel={hotel}
            />
          ))
            : <p>Enter some data</p>
          }
    </div>
  );
}
