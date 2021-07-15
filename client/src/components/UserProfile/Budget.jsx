import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
} from '@material-ui/core';

import userProStyles from './UserProStyles.jsx';

export default function Budget({ flightsTotPrice, eventsTotPrice, hotelsTotPrice }) {
  const classes = userProStyles();

  const getTotal = (eventTot, flightTot, hotelTot) => (
    parseFloat(eventTot) + parseFloat(flightTot) + parseFloat(hotelTot)).toFixed(2);

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
  eventsTotPrice: PropTypes.string,
  flightsTotPrice: PropTypes.string,
  hotelsTotPrice: PropTypes.string,
};

Budget.defaultProps = {
  eventsTotPrice: '',
  flightsTotPrice: '',
  hotelsTotPrice: '',
};
