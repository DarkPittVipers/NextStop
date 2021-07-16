import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import BookHotel from '../BookingModals/BookHotel.jsx';

const useStyles = makeStyles(() => ({
  hotelContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  hotelTile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
  },
  hotelBtns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
}));

export default function HotelTile({ option, getAllHotels }) {
  const classes = useStyles();

  const deleteBookingOption = (optionID) => axios.delete(`/user/hotels?id=${optionID}`).then((res) => res.data);

  return (
    <div className={classes.hotelContainer}>

      {option.length !== 0 ? (
        <div className={classes.hotelTile}>

          <div>
            <b>Hotel Name:</b>
            {' '}
            {option.hotel.name}
          </div>
          <div>
            <b>City:</b>
            {' '}
            {option.hotel.address.cityName}
          </div>
          <div>
            <b>Check In Date:</b>
            {' '}
            {option.offers[0].checkInDate}
          </div>
          <div>
            <b>Check Out Date:</b>
            {' '}
            {option.offers[0].checkOutDate}
          </div>
          <div>
            <b>Price:</b>
            {' '}
            {option.offers[0].price.total}
          </div>
          {/* <div> {option.}</div>
          <div> {option.}</div> */}
          <div>
            <b>Room Description:</b>
            {' '}
            {option.offers[0].room.description.text}
          </div>
          <div className={classes.hotelBtns}>
            <BookHotel offerID={option.offers[0].id} />
            <Button
              variant="outlined"
              onClick={() => {
                deleteBookingOption(option._id);
              }}
              color="primary"
            >
              Delete
            </Button>
          </div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
