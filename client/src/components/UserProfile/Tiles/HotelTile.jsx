import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BookHotel from '../BookingModals/BookHotel.jsx';
import {
  Grid,
} from '@material-ui/core';

export default function HotelTile({ userInfo, hotelBookInfo}) {
  // const classes = useStyles();

  return (
    <div>
      <BookHotel hotelBookInfo={hotelBookInfo} userInfo={userInfo} />
    </div>
  );
}
