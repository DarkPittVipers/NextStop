import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BookEvent from '../BookingModals/BookEvent.jsx';

import BookHotel from '../BookingModals/BookHotel.jsx';
import {
  Grid,
} from '@material-ui/core';

export default function EventTile({ eventInfo, eventBookInfo}) {
  // const classes = useStyles();
  console.log('event info', eventInfo);
  console.log('eventBookInfo', eventBookInfo);

  return (
    <div>
      <div>
        {eventInfo.name}
      </div>
      <BookEvent eventBookInfo={eventBookInfo} />
    </div>
  );
}