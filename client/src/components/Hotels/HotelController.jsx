import React, { useContext, useState } from 'react';
import { InputBase, TextField } from '@material-ui/core';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  eventContainer: {
    backgroundColor: '#f7fff7',
    borderBottom: '2px solid #f7fff7',
    width: '88vw',
    padding: '10px 30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: '"Oswald", sans-serif',
    color: 'black',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    overflow: 'auto',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '20%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  controlBar: {
    height: '3em',
    width: '100%',
    backgroundColor: 'white',
  },
}));

export default function HotelController() {
  const classes = useStyles();
  return (
    <div className={classes.controlBar}>
      <TextField
        label="Destination"
        id="destination-hotel"
        placeholder="Where to?"
        defaultValue={null}
        size="small"
      />
      <TextField
        label="Guests"
        id="guests-hotel"
        placeholder="How Many Of Ya?"
        defaultValue={null}
        size="small"
      />
    </div>
  );
}
