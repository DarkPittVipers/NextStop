import React, { useState, useContext } from 'react';
import axios from 'axios';

import {
  Button, TextField, Dialog,
  DialogActions, DialogContent,
  DialogTitle, FormControl,
  Select, MenuItem, InputLabel,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import { FlightContext } from '../../../helpers/context';

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

export default function BookFlight() {
  const {
    setTitle,
    setFirstName,
    setLastName,
    setEmail,
    title,
    firstName,
    lastName,
    email,
  } = useContext(FlightContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);

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

  }).then((res) => res.data)
    .then(() => {
      console.log('flightOBJ', flightObj);
    });

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Book!
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Book Flight Information</DialogTitle>
        <DialogContent>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-controlled-open-select-label">Title</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={selectOpen}
              onClose={handleSelectClose}
              onOpen={handleSelectOpen}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            >
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
              <MenuItem value="Miss">Miss</MenuItem>
            </Select>
          </FormControl>

          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            placeholder="Enter Your First Name"
            type="text"
            fullWidth
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastName"
            label="Last Name"
            placeholder="Enter Your Last Name"
            type="text"
            fullWidth
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
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
          <Button onClick={() => { postFlightBooking(); }} color="primary">
            Submit Booking
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
