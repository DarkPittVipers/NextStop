import React, { useContext, useState } from 'react';
import { Button, TextField, Switch } from '@material-ui/core';
import axios from 'axios';
import useStyles from '../TabStyle.jsx';
import FlightDatePicker from './FlightDatePicker.jsx';

// eslint-disable-next-line max-len
export default function FlightController({ setFlights, nonStop, setNonStop, roundTrip, setRoundTrip, setLoading }) {
  const [flightInfo, setFlightInfo] = useState({
    originLocationCode: '',
    destinationLocationCode: '',
    departureDate: '',
    adults: null,
    returnDate: '',
  });
  const getRoundTrip = () => {
    axios.get('api/flights/roundTrip', {
      params: {
        originLocationCode: flightInfo.originLocationCode,
        destinationLocationCode: flightInfo.destinationLocationCode,
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
    axios.get('api/flights/oneWay', {
      params: {
        originLocationCode: flightInfo.originLocationCode,
        destinationLocationCode: flightInfo.destinationLocationCode,
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

  function nonStopSwitch() {
    if (nonStop === true) {
      setNonStop(false);
    } else if (nonStop === false) {
      setNonStop(true);
    }
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
        label="Destination"
        id="destination-flight"
        placeholder="Where ya going?"
        onChange={onFlightInfoChange('destinationLocationCode')}
        variant="outlined"
        defaultValue={flightInfo.destinationLocationCode}
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
      Non-Stop?
      <Switch
        checked={nonStop}
        onChange={nonStopSwitch}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      Round Trip?
      <Switch
        checked={roundTrip}
        onChange={roundTripSwitch}
        color="primary"
        name="checkedB"
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <FlightDatePicker setDate={setDate} flightInfo={flightInfo} />

      <Button
        variant="outlined"
        onClick={(e) => {
          e.preventDefault();
          setLoading(true);
          getFlight();
        }}
      >
        Go
      </Button>
    </div>
  );
}
