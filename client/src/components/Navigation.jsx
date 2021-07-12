import React from 'react';
import {
  Grid,
  Typography,
  InputBase,
  Button,
} from '@material-ui/core';

// MATERIAL UI ICONS
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  nav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: '"Oswald", sans-serif',
    backgroundColor: '#1A535C',
    boxShadow: '0 20px 20px 20px rgba(0, 0, 0, 0.15), 0 5px 15px 15px rgba(0, 0, 0, 0.15)',
    padding: '10px 30px',
    margin: 0,
  },
  searchBar: {
    border: '2px solid white',
    borderRadius: '8px',
  },
  destSearch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  destFont: {
    fontFamily: '"Oswald", sans-serif',
    fontWeight: '500',
    fontSize: '20px',
  },
  searchInputBox: {
    padding: '5px',
    color: 'white',
    fontFamily: '"Oswald", sans-serif',
    fontWeight: '500',
    fontSize: '20px',
    marginLeft: '10px',
  },
  searchIcon: {
    marginLeft: '5px',

  },
  loginCont: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: 'white',
  },
  loginBtn: {
    color: 'white',
    border: '2px solid white',
    borderRadius: '8px',
    marginLeft: '5px',
  },
}));

export default function Navigation() {
  const classes = useStyles();

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
          >
            LOG IN
          </Button>
        </a>
      </Grid>

    </Grid>
  );
}
