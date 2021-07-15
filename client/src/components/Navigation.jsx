import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nav: {
    fontFamily: '"Oswald", sans-serif',
    backgroundColor: '#1A535C',
    boxShadow: '0 20px 20px 20px rgba(0, 0, 0, 0.15), 0 5px 15px 15px rgba(0, 0, 0, 0.15)',
    padding: '10px 30px',
    margin: 0,
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
    </Grid>
  );
}
