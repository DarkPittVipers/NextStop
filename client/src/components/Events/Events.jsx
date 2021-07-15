import React, { useContext, useState } from 'react';
import EventController from './EventController.jsx';
import EventTile from './EventTile.jsx';
import useStyles from '../TabStyle.jsx';

export default function Events() {
  const classes = useStyles();
  return (
    <div className={classes.tabContainer}>
      <EventController />
      <EventTile />
    </div>
  );
}
