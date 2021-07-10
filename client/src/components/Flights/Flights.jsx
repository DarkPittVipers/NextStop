import React, {useContext, UseState, useEffect } from 'react';
import { Paper, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

}));

export default function Event() {
  const classes = useStyles();

  return (
    <Grid
    className={classes.event_container}
      container
      alignItem="center"
      justify="space-between"
    >

    </Grid>
  );
}
