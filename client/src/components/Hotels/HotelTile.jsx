import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid, Paper, Typography, ButtonBase, Fab,
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
    padding: theme.spacing(2),
    margin: 'auto',
    width: '100%',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  amenities: {
    display: 'inline',
  },
}));

const hotelPhotos = {
  HL: 'https://image.shutterstock.com/shutterstock/photos/311673374/display_1500/stock-photo-amsterdam-netherlands-august-sign-in-front-of-the-holiday-in-hotel-in-amsterdam-311673374.jpg',
  HT: 'https://www.shutterstock.com/image-photo/frankfurt-main-germany-september-10-2016-493283194',
};

const setPhoto = (hotelCode) => {
  const photos = Object.keys(hotelPhotos);
  for (let i = 0; i < photos.length; i++) {
    if (photos[i] === hotelCode) {
      return hotelPhotos[i];
    }
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
            <ButtonBase className={classes.image}>
              <img src={setPhoto(hotel.hotel.chainCode)} alt="hotel-img" />
            </ButtonBase>
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
                <Typography variant="body2" color="textSecondary">
                  <ul>
                Amenities:{' '}
                  {hotel.hotel.amenities ? hotel.hotel.amenities.slice(0, 4).map((amenity) => {
                  return (
                    <li style={{fontSize: '10px', display: 'inline'}}>{amenity}</li>
                  )})
                  : <p>No Amenities Listed</p>
                    }
                    ...
                  </ul>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body3">
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
