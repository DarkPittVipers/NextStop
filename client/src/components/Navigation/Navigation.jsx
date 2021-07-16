import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// MATERIAL UI ICONS
import AccountCircle from '@material-ui/icons/AccountCircle';

import NavStyles from './NavStyles.jsx';

export default function Navigation({
  user, loggedIn, setCurrentDestination,
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [destinations, setDestinations] = useState([]);

  const classes = NavStyles();

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAutoCompleteUpdate = () => {
    if (searchTerm.length > 1) {
      axios.get('/api/meta/cities', { params: { searchTerm } })
        .then((response) => {
          setDestinations(response.data);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    handleAutoCompleteUpdate();
  }, [searchTerm]);

  return (
    <Grid container className={classes.nav}>
      <Grid item direction="column">
        <Grid container direction="column" alignItems="flex-start">
          <Link to="/">
            <img src="assets/NextStopLogo.svg" height="48" alt="logo" />
          </Link>
          <Typography className={classes.mottoFont}>
            The odds of dying abroad are 1 in
            <br />
            449,510 take your chances with us
          </Typography>
        </Grid>
      </Grid>
      <Grid
        className={classes.destSearch}
        item
      >
        <Grid container justifyContent="flex-start" alignItems="center">
          <Typography className={classes.destFont}>Destination:&nbsp;</Typography>
          <Autocomplete
            id="search-destinations"
            options={destinations}
            getOptionLabel={(option) => `${option.city_ascii}, ${option.admin_name && option.iso2 === 'US' ? `${option.admin_name},` : ''} ${option.country}`}
            onChange={(event, newValue) => {
              setCurrentDestination(newValue);
            }}
            style={{ width: 250 }}
            renderInput={(params) => (
              <TextField
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...params}
                variant="outlined"
                placeholder="Search…"
                color="primary"
                className={classes.searchInputBox}
                onChange={handleChange}
              />
            )}
          />
        </Grid>
      </Grid>

      <Grid className={classes.loginCont} item>
        <AccountCircle />
        {loggedIn ? (
          <Link to="/profile" className={classes.link}>
            <Button className={classes.loginBtn}>
              {user.nickname}
            </Button>
          </Link>
        ) : (
          <Button className={classes.loginBtn} href="/login">
            Log in
          </Button>
        )}
      </Grid>
    </Grid>
  );
}

Navigation.propTypes = {
  user: PropTypes.string,
  loggedIn: PropTypes.bool,
  setCurrentDestination: PropTypes.func,
};

Navigation.defaultProps = {
  user: { nickname: 'Log in' },
  loggedIn: false,
  setCurrentDestination: () => {},
};
