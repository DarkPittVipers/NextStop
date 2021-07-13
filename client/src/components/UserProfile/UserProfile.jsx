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
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: '20px',
    fontFamily: '"Oswald", sans-serif',
    color: 'black',
    boxShadow: '0 20px 20px 20px rgba(0, 0, 0, 0.15), 0 5px 15px 15px rgba(0, 0, 0, 0.15)',
  },
  leftContainer: {
    border: '1px solid red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    border: '1px solid blue',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    border: '1px solid black',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
  },
  profilePic: {
    backgroundColor: 'white',
    height: '20vh',
  },
  budget: {
    border: '1px solid black',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '60%',
  },
  budItems: {
    border: '1px solid black',
    borderRadius: '8px',
    width: '90%',
    padding: '10px',
    margin: '5px 0 5px 0',
  },
  myTrip: {
    border: '1px solid black',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    width: '80%',
    height: '80%',
  },
  logOutBtn: {
    border: '1px solid black',
    borderRadius: '8px',
  },

}));

export default function UserProfile() {
  const classes = useStyles();
  return (
    <Grid
      container
      xs={12}
      className={classes.profileContainer}
    >
      <Grid
        xs={6}
        container
        className={classes.leftContainer}
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
          className={classes.budget}
        >
          <Grid
            item
            className={classes.budItems}
          >
            Budget:
          </Grid>
          <Grid
            item
            className={classes.budItems}
          >
            Events:
          </Grid>
          <Grid
            item
            className={classes.budItems}
          >
            Hotels:
          </Grid>
          <Grid
            item
            className={classes.budItems}
          >
            Flights:
          </Grid>
          <Grid
            item
            className={classes.budItems}
          >
            Total:
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        xs={6}
        className={classes.rightContainer}
      >
        <Grid
          item
          className={classes.myTrip}
        >
          My Trip List
        </Grid>
        <Grid
          item
          className={classes.logOutBtn}
        >
          <a
            href="/logout"
            style={{
              textDecoration: 'none',
            }}
          >
            <Button>Log Out</Button>
          </a>
        </Grid>
      </Grid>
      {/* <Route path="/"><Home /></Route> */}
    </Grid>
  );
}

UserProfile.propTypes = {
};

UserProfile.defaultProps = {
};
