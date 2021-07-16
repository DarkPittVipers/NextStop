import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Button, TextField, Dialog,
  DialogActions, DialogContent, DialogContentText,
  DialogTitle, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel,
  Select, MenuItem, InputLabel, Grid,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  calContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25vh',
    border: '2px solid black',
    borderRadius: '6px',
  },
}));

export default function BookFlight({ flightBookInfo }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);
  const [name, setName] = useState('name');
  const [email, setEmail] = useState('email');

  // const getLoadUserData = () => axios.get()

  // useEffect(() => {
  //   getFlightsHotels()
  //   addFlightsHotelsEventsPrices()
  //  }, [flightBookInfo]);

  const handleSelectOpen = () => {
    setSelectOpen(true);
  };

  const handleSelectClose = () => {
    setSelectOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // CHANGE POST ROUTE
  const postFlightBooking = (flightObj) => axios.post('/flightbooking', {
    name: flightObj.name,
    email: flightObj.email,

  }).then((res) => res.data)
    .then(() => {
      console.log('flightOBJ', flightObj);
    });

  const handleBooking = () => {
    const flightObj = {
      name,
      email,
    };
    postFlightBooking(flightObj)
      .then(() => handleClose())
      .then(console.log('Submit FLIGHT BOOKING WORKS', flightObj))
      .catch();
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <Grid item xs={6} sm={3} className="flightBook-container">

          <div>Book!</div>
        </Grid>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Book Flight Information</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Full Name"
            placeholder="Enter Your Full Name"
            type="text"
            fullWidth
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleBooking} color="primary">
            Submit Booking
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
}
