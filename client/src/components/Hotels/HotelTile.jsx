import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button, Grid, Paper, Typography, ButtonBase, Fab,
} from '@material-ui/core';
import axios from 'axios';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { AppContext } from '../../helpers/context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    marginBottom: '2px',
    width: '100%',
  },
  image: {
    width: 50,
    height: 50,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '12rem',
    maxHeight: '12rem',
  },
  amenities: {
    display: 'inline',
  },
}));

const hotelPhotos = {
  HI: 'https://i.ibb.co/jVTZ1mG/holidayinn.jpg',
  HT: 'https://i.ibb.co/hggn58z/hilton.jpg',
  IC: 'https://i.ibb.co/FVk14Rz/intercon.jpg',
};

const setPhoto = (hotelCode) => {
  console.log(hotelCode);
  const photos = Object.keys(hotelPhotos);
  for (let i = 0; i < photos.length; i++) {
    if (photos[i] === hotelCode) {
      return hotelPhotos[hotelCode];
    }
    return 'https://i.ibb.co/Jv7TnGG/grand-budapest.jpg';
  }
};

export default function HotelTile({ hotel }) {
  const classes = useStyles();
  const [fav, setFav] = useState(false);
  const { setFavorites, favorites } = useContext(AppContext);

  const saveHotel = (favHotel) => {
    axios.put('/user/hotels', favHotel)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
              <img className={classes.img} src={setPhoto(hotel.hotel.chainCode)} alt="hotel-img" />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {hotel.hotel.name}
                  <br />
                  {hotel.hotel.address.cityName}
                  ,
                  {hotel.hotel.address.countryCode}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {hotel.hotel.description ? hotel.hotel.description.text.slice(0, 200)
                    : <span>No Description</span>}
                  ...
                </Typography>
                <ul>
                  Amenities:
                  {' '}
                  {hotel.hotel.amenities ? hotel.hotel.amenities.slice(0, 4).map((amenity) => (
                    <li key={amenity} style={{ fontSize: '10px', display: 'inline' }}>{amenity}</li>
                  ))
                    : <p>No Amenities Listed</p>}
                  ...
                </ul>
              </Grid>
              <Grid item>
                <Button size="small" variant="contained" color="#cdc545">
                  More Info
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                Price:
                {' '}
                {hotel.offers[0].price.currency}
                ,
                {' '}
                {hotel.offers[0].price.total}
                <br />
                Check-In:
                {' '}
                {hotel.offers[0].checkInDate}
                <br />
                Check-Out:
                {' '}
                {hotel.offers[0].checkOutDate}
                <br />
                Adults:
                {' '}
                {hotel.offers[0].guests.adults}
              </Typography>
              <br />
              <br />
              {fav === false ? (
                <Fab
                  aria-label="like"
                  size="small"
                  onClick={(e) => {
                    e.preventDefault();
                    setFav(true);
                    saveHotel(hotel);
                    setFavorites([...favorites, hotel]);
                  }}
                >
                  <FavoriteIcon />
                </Fab>
              ) : (
                <Fab
                  disabled
                  aria-label="like"
                  size="small"
                >
                  <FavoriteIcon />
                </Fab>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
