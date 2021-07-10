import React, { useContext, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Events from '../Events/Events.jsx';
import Flights from '../Flights/Flights.jsx';
import Hotels from '../Hotels/Hotels.jsx';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundColor: '#f7fff7',
    borderBottom: '2px solid #f7fff7',
    height: '80vh',
    width: '90vw',
    padding: '10px 30px',
    marginTop: '3%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '20px',
    fontFamily: '"Oswald", sans-serif',
    color: 'black',
    boxShadow: '0 20px 20px 20px rgba(0, 0, 0, 0.15), 0 5px 15px 15px rgba(0, 0, 0, 0.15)',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.homeContainer}>
      WELCOME ABOARD!
      {/* <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/events">Events</Link>
              </li>
              <li>
                <Link to="/hotels">Hotels</Link>
              </li>
              <li>
                <Link to="/flights">Flights</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/events">
              <Events />
            </Route>
            <Route path="/hotels">
              <Hotels />
            </Route>
            <Route path="/flights">
              <Flights />
            </Route>
          </Switch>
        </div>
      </Router> */}
    </div>
  );
}

Home.propTypes = {
};

Home.defaultProps = {
};
