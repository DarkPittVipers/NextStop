import React, { useState } from 'react';
import axios from 'axios';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Select,
  MenuItem,
  InputLabel,
  Grid,
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

export default function BookHotel({ hotelBookInfo, userInfo }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectOpen, setSelectOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('lastName');
  const [email, setEmail] = useState('email');

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
  const postHotelBooking = (hotelObj) => axios
    .post('/hotel/booking', {
      data: {
        offerId: hotelBookInfo.offerId,
        guests: [
          {
            name: {
              title: hotelObj.title,
              firstName: hotelObj.firstName,
              lastName: hotelObj.lastName,
            },
            contact: {
              phone: '+33679278416',
              email: hotelObj.email,
            },
          },
        ],
        payments: [
          {
            method: 'creditCard',
            card: {
              vendorCode: 'VI',
              cardNumber: '4111111111111111',
              expiryDate: '2023-01',
            },
          },
        ],
      },
    })
    .then((res) => res.data)
    .then(() => {
      console.log('hotelOBJ', hotelObj);
    });

  const handleBooking = () => {
    const hotelObj = {
      title: title,
      firstName: firstName,
      lastName: lastName,
      email: email,
      offerId: hotelBookInfo.offerId,
    };
    postHotelBooking(hotelObj)
      .then(() => handleClose())
      .then(console.log('Submit HOTEL BOOKING WORKS', hotelObj))
      .catch();
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <Grid item xs={6} sm={3} className="hotelBook-container">
          <div>Book!</div>
        </Grid>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Book Hotel Information</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First Name"
            placeholder="Enter Your First Name"
            type="text"
            fullWidth
            value={name}
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
            value={name}
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
          <Button onClick={handleBooking} color="primary">
            Submit Booking
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

BookHotel.propTypes = {
};

BookHotel.defaultProps = {
};