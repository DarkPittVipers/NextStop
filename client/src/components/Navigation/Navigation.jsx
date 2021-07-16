import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Grid,
  Container,
  Typography,
  TextField,
  Button,
  InputAdornment,
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// MATERIAL UI ICONS
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

import NavStyles from './NavStyles.jsx';

export default function Navigation({ userLogin, loginBtnDisplay, profileBtnDisplay }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchObj, setSearchObj] = useState({});
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
    <Grid
      container
      className={classes.nav}
    >
      <Link to="/">
        <img src="assets/NextStopLogo.svg" height="64" alt="logo" />
      </Link>
      <Grid
        className={classes.destSearch}
        item
      >
        <Grid container justifyContent="flex-start" alignItems="center">
          <Typography className={classes.destFont}>Destination: &nbsp; &nbsp;</Typography>
          <Autocomplete
            id="search-destinations"
            options={destinations}
            getOptionLabel={(option) => `${option.city_ascii}, ${option.admin_name && option.iso2 === 'US' ? `${option.admin_name},` : ''} ${option.country}`}
            className={classes.searchInputBox}
            onChange={(event, newValue) => {
              setSearchObj(newValue);
            }}
            style={{ width: 250 }}
            renderInput={(params) => (
              <TextField
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...params}
                variant="outlined"
                placeholder="Search…"
                onChange={handleChange}
              />
            )}
          />
        </Grid>
      </Grid>

      <Grid
        className={classes.loginCont}
        item
      >
        <AccountCircle />
        <Button
          className={classes.loginBtn}
          href="/login"
          style={{ display: loginBtnDisplay }}
        >
          {userLogin}
        </Button>
        <Link to="/profile">
          <Button
            className={classes.loginBtn}
            style={{ display: profileBtnDisplay }}
          >
            {userLogin}
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

Navigation.propTypes = {
  userLogin: PropTypes.string,
  loginBtnDisplay: PropTypes.string,
  profileBtnDisplay: PropTypes.string,
};

Navigation.defaultProps = {
  userLogin: '',
  loginBtnDisplay: 'true',
  profileBtnDisplay: 'none',
};
