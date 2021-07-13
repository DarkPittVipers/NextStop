import React, { useContext, useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {
  Tab, Paper, Tabs,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Events from '../Events/Events.jsx';
import Flights from '../Flights/Flights.jsx';
import Hotels from '../Hotels/Hotels.jsx';
import FullWidthTabs from '../Tabs.jsx';

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
    justifyContent: 'top',
    alignItems: 'center',
    borderRadius: '20px',
    fontFamily: '"Oswald", sans-serif',
    color: 'black',
    boxShadow: '0 20px 20px 20px rgba(0, 0, 0, 0.15), 0 5px 15px 15px rgba(0, 0, 0, 0.15)',
  },
  tabs: {
    width: '100%',
    position: 'relative',
    top: '0',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className={classes.homeContainer}>
      <FullWidthTabs />
    </div>
  );
}

Home.propTypes = {
};

Home.defaultProps = {
};
