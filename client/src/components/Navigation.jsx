import React from 'react';
import axios from 'axios';
import { Grid, Typography, InputBase, Button } from '@material-ui/core';

// MATERIAL UI ICONS
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
    marginLeft: "5px",
  },
}));

export default function Navigation() {
  const classes = useStyles();

  const login = () => {
    axios.get('/login');
  };

  return (
    <Grid
      container
<<<<<<< HEAD
      className={classes.nav}
=======
      alignItems="center"
      justifyContent="space-between"
      style={{
        backgroundColor: '#8595da',
        borderBottom: '2px solid #4a62c8',
        height: 80,
        padding: '10px 30px',
        margin: 0,
      }}
>>>>>>> fec8110f9a0b0532b7fb2087029162c6502a382b
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
        <Button
          className={classes.loginBtn}
          onClick={() => { login(); }}
        >
        LOG IN
        </Button>
      </Grid>

    </Grid>
  );
}
