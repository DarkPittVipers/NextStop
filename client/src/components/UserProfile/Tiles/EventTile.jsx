import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BookHotel from '../BookingModals/BookHotel.jsx';
import {
  Grid,
} from '@material-ui/core';

export default function EventTile({ userInfo, eventBookInfo}) {
  // const classes = useStyles();
  console.log('user info', userInfo);
  console.log('eventBookInfo', eventBookInfo);

  return (
    <div>
      <BookHotel hotelBookInfo={hotelBookInfo} userInfo={userInfo} />
    </div>
  );
}