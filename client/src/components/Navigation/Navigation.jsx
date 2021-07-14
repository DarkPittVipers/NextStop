import React from 'react';
import PropTypes from 'prop-types';

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

export default function Navigation({ handleLogin, userLogin }) {
  const classes = NavStyles();

  return (
    <Grid
      container
      className={classes.nav}
    >
      <img src="assets/NextStopLogo.svg" height="64" alt="logo" />
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
        <a
          href="/login"
          style={{
            textDecoration: 'none',
          }}
        >
          <Button
            className={classes.loginBtn}
            onClick={handleLogin}
          >
            {userLogin}
          </Button>
        </a>
      </Grid>
    </Grid>
  );
}

Navigation.propTypes = {
  handleLogin: PropTypes.func,
  userLogin: PropTypes.string,
};

Navigation.defaultProps = {
  handleLogin: () => { },
  userLogin: '',
};
