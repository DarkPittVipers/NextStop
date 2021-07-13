import React, { useContext, useState, useEffect } from 'react';
import {
  // BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {
  Tab, Paper, Tabs, Grid, Button,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  profileContainer: {
    backgroundColor: '#f7fff7',
    borderBottom: '2px solid #f7fff7',
    height: '80vh',
    width: '90vw',
    padding: '10px 30px',
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    alignItems: 'center',
    borderRadius: '20px',
    fontFamily: '"Oswald", sans-serif',
    color: 'black',
    boxShadow: '0 20px 20px 20px rgba(0, 0, 0, 0.15), 0 5px 15px 15px rgba(0, 0, 0, 0.15)',
  },
  homebtnContainer: {

  },
  topContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  bottomContainer: {

  },
  profile: {
    border: '1px solid black',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
  },
  myTrip: {
    border: '1px solid black',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
  },
  wishList: {
    border: '1px solid black',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
  },
  profilePic: {
    backgroundColor: 'white',
    height: '20vh',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.profileContainer}
    >
      <Grid
        item
        className={classes.homebtnContainer}
      >
        <Button>
          {/* <Link to="/">Home</Link> */}
        </Button>
      </Grid>
      <Grid
        container
        className={classes.topContainer}
      >
        <Grid
        item
        className={classes.profile}
        >
          <Grid
            item
            className={classes.userName}
          >
            Username:
          </Grid>
          <Grid
            item
            className={classes.profilePic}
          >
            <img className={classes.profilePic} src="assets/png.png" alt="Broken Profile Pic" />

          </Grid>
        </Grid>
        <Grid
        item
        className={classes.myTrip}
        >
          My Trip
        </Grid>
      </Grid>
      <Grid
        item
        className={classes.BottomContainer}
      >
        <div className={classes.wishList}>
          Wish List
        </div>
      </Grid>
      {/* <Route path="/"><Home /></Route> */}
    </Grid>
  );
}

Home.propTypes = {
};

Home.defaultProps = {
};
