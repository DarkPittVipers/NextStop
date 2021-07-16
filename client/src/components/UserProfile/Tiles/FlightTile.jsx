import React, { useState } from 'react';
import PropTypes from 'prop-types';

import BookFlight from '../BookingModals/BookFlight.jsx';

import {
  Grid,
} from '@material-ui/core';

// import useStyles from './UseStyles.jsx';

export default function FlightTile({ flightBookInfo }) {
  // const classes = useStyles();

  return (
    <div>
      <BookFlight flightBookInfo={flightBookInfo} />
    </div>
  );
}
