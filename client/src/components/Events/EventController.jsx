import React, { useContext, useState } from 'react';
import { TextField } from '@material-ui/core';
import useStyles from '../TabStyle.jsx';

export default function EventController() {
  const classes = useStyles();
  return (
    <div className={classes.controlBar}>
      <TextField
        label="Size"
        id="outlined-size-small"
        variant="outlined"
        placeholder="Search Events"
        size="small"
      />
    </div>
  );
}
