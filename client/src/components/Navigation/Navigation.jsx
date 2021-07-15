import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Grid,
  Typography,
  InputBase,
  Button,
} from '@material-ui/core';

// MATERIAL UI ICONS
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

import NavStyles from './NavStyles.jsx';

export default function Navigation({ userLogin, loginBtnDisplay, profileBtnDisplay }) {
  const classes = NavStyles();

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
        <Typography className={classes.destFont}>Destination: &nbsp; &nbsp;</Typography>
        <div className={classes.searchBar}>
          <SearchIcon className={classes.searchIcon} />
          <InputBase
            className={classes.searchInputBox}
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
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
