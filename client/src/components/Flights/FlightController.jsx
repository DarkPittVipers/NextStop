import React, { useContext, useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import DatePicker from './DatePicker.jsx';

const useStyles = makeStyles((theme) => ({
  flightContainer: {
    backgroundColor: '#f7fff7',
    borderBottom: '2px solid #f7fff7',
    width: '88vw',
    height: '72vh',
    padding: '10px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Oswald", sans-serif',
    color: 'black',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    overflow: 'auto',
  },
  controlBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    backgroundColor: 'white',
  },

}));

export default function FlightController(setFlights) {
  const [flightInfo, setFlightInfo] = useState({
    originLocationCode: 'JFK',
    destinationLocationCode: '',
    departureDate: '',
    adults: null,
    returnDate: '',
  });
  const getRoundTrip = () => {
    axios.get('/flights/roundTrip', flightInfo)
      .then((response) => {
        setFlights(response.results);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(flightInfo);
  };

  const onFlightInfoChange = (input) => (e) => {
    flightInfo[input] = e.target.value;
  };

  function setDate(startDate, endDate) {
    flightInfo.departureDate = startDate;
    flightInfo.returnDate = endDate;
  }

  const classes = useStyles();
  return (
    <div className={classes.controlBar}>
      <TextField
        label="Destination"
        id="destination-hotel"
        placeholder="Where to?"
        onChange={onFlightInfoChange('destinationLocationCode')}
        variant="outlined"
        defaultValue={null}
        size="small"
      />
      <TextField
        label="Passengers"
        id="passengers-flight"
        type="number"
        onChange={onFlightInfoChange('adults')}
        placeholder="How Many Of Ya?"
        variant="outlined"
        defaultValue={null}
        size="small"
      />

      <DatePicker setDate={setDate} flightInfo={flightInfo} />

      <Button
        variant="outlined"
        onClick={(e) => {
          e.preventDefault();
          getRoundTrip();
        }}
      >
        Go
      </Button>
    </div>
  );
}
