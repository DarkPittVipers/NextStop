import React, { useContext, useState } from 'react';
import { Button, TextField, Switch } from '@material-ui/core';
import axios from 'axios';
import useStyles from '../TabStyle.jsx';
import { AppContext } from '../../helpers/context'
import FlightDatePicker from './FlightDatePicker.jsx';

// eslint-disable-next-line max-len
export default function FlightController({ setFlights, roundTrip, setRoundTrip, setLoading }) {
  const { currentDestination } = useContext(AppContext);
  const [flightInfo, setFlightInfo] = useState({
    originLocationCode: '',
    departureDate: '',
    adults: null,
    returnDate: '',
  });
  const getRoundTrip = () => {
    axios.get('/api/flights/roundTrip', {
      params: {
        originLocationCode: flightInfo.originLocationCode,
        destinationLocationCode: currentDestination.airports[0],
        departureDate: flightInfo.departureDate,
        adults: flightInfo.adults,
        returnDate: flightInfo.returnDate,
        currencyCode: 'USD',
        maxPrice: 1000,
        max: 100,
      },
    })
      .then((response) => {
        setFlights(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getOneWayTrip = () => {
    axios.get('/api/flights/oneWay', {
      params: {
        originLocationCode: flightInfo.originLocationCode,
        destinationLocationCode: currentDestination.airports[0],
        departureDate: flightInfo.departureDate,
        adults: flightInfo.adults,
        currencyCode: 'USD',
        maxPrice: 1000,
        max: 100,
      },
    })
      .then((response) => {
        setFlights(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onFlightInfoChange = (input) => (e) => {
    const flightState = {
      ...flightInfo,
      [input]: e.target.value,
    };
    setFlightInfo(flightState);
  };

  function setDate(dates) {
    flightInfo.departureDate = dates.starting;
    flightInfo.returnDate = dates.ending;
  }
  function roundTripSwitch() {
    setRoundTrip(!roundTrip);
  }

  function getFlight() {
    if (roundTrip === true) {
      getRoundTrip();
    } else if (roundTrip === false) {
      getOneWayTrip();
    }
  }

  const classes = useStyles();
  return (
    <div className={classes.controlBar}>
      <TextField
        label="Origin"
        id="origin-flight"
        placeholder="Where ya at?"
        onChange={onFlightInfoChange('originLocationCode')}
        variant="outlined"
        defaultValue={flightInfo.originLocationCode}
        size="small"
      />
      <TextField
        label="Passengers"
        id="passengers-flight"
        type="number"
        onChange={onFlightInfoChange('adults')}
        placeholder="How many of ya?"
        variant="outlined"
        defaultValue={null}
        size="small"
      />
      Round Trip?
      <Switch
        checked={roundTrip}
        onChange={roundTripSwitch}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <FlightDatePicker setDate={setDate} flightInfo={flightInfo} roundTrip={roundTrip} />

      <Button
        variant="outlined"
        onClick={(e) => {
          e.preventDefault();
          setLoading(true);
          getFlight();
          console.log(currentDestination.airports[0]);
        }}
      >
        Go
      </Button>
    </div>
  );
}
