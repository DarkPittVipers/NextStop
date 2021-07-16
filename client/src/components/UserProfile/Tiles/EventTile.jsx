import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BookEvent from '../BookingModals/BookEvent.jsx';

import BookHotel from '../BookingModals/BookHotel.jsx';
import {
  Grid, Button,
} from '@material-ui/core';

export default function EventTile({ eventInfo, handleEventDelete }) {
  // const classes = useStyles();

  return (
    <div>
      <div>
        {
        eventInfo ? eventInfo.name : null
        }
      </div>
      <Button onClick={() => handleEventDelete(eventInfo)} color="primary">
        Delete Event
      </Button>
      <BookEvent eventInfo={eventInfo} />
    </div>
  );
}