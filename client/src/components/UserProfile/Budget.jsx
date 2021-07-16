import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
} from '@material-ui/core';

import userProStyles from './UserProStyles.jsx';

export default function Budget({flightInfo, eventInfo, hotelInfo}) {
  const classes = userProStyles();
  const [flightsTotPrice, setFlightsTotPrice] = useState(0);
  const [eventsTotPrice, setEventsTotPrice] = useState(0);
  const [hotelsTotPrice, setHotelsTotPrice] = useState(0);

  const getTotal = (eventTot, flightTot, hotelTot) => (
    parseFloat(eventTot) + parseFloat(flightTot) + parseFloat(hotelTot)).toFixed(2);

  useEffect(() => {
    if (hotelInfo) {
      //   setHotelsTotPrice(hotelInfo.price.total);
    }
    if (flightInfo) {
      // setFlightsTotPrice(flightInfo.price.total);
    }
    if (eventInfo) {
      // setEventsTotPrice();
    }
  }, [hotelInfo]);

  return (
    <Grid
      item
      xs={12}
      className={classes.budget}
    >
      <Grid
        item
        xs={12}
        className={classes.budTitle}
      >
        Budget:
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.budItems}
      >
        <div>
          Events:
        </div>
        <div>
          $
          {eventsTotPrice}
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.budItems}
      >
        <div>
          Hotels:
        </div>
        <div>
          $
          {hotelsTotPrice}
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.budItems}
      >
        <div>
          Flights:
        </div>
        <div>
          $
          {flightsTotPrice}
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        className={classes.budItems}
      >
        <div>
          Total:
        </div>
        <div>
          $
          {getTotal(eventsTotPrice, flightsTotPrice, hotelsTotPrice)}
        </div>
      </Grid>
    </Grid>
  );
}

Budget.propTypes = {
};

Budget.defaultProps = {
};
