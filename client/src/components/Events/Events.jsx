import React, { useContext, useState } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  eventsContainer: {
    backgroundColor: '#1A535C',
    borderBottom: '2px solid #f7fff7',
    height: '50%',
    padding: '10px 30px',
    margin: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: '50vh',
    border: "2px solid black",
    borderRadius: "20px",
  },
}));

export default function Events() {
  const classes = useStyles();
  return (
    <Grid
      container
      className="events-container"
    >
      details go here
    </Grid>
  );
}
