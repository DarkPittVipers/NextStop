import React, { useContext, useState, useEffect } from 'react';
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  homeContainer: {
    backgroundColor: '#f7fff7',
    borderBottom: '2px solid #f7fff7',
    height: '50vh',
    padding: '10px 30px',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid black',
    borderRadius: '20px',
    fontFamily: '"Oswald", sans-serif',
    color: 'black',
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Container
      className={classes.homeContainer}
    >
      WELCOME ABOARD!
    </Container>
  );
}

Home.propTypes = {
};

Home.defaultProps = {
};
