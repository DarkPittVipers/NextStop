// eslint-disable-next-line no-unused-vars
import React, { useContext, useState, useEffect } from 'react';
import {
  TextField, MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const categories = [
  {
    value: 'RESTAURANT',
    label: 'Restaurants',
  },
  {
    value: 'NIGHTLIFE',
    label: 'Nightlife',
  },
  {
    value: 'SIGHTS',
    label: 'Sights',
  },
  {
    value: 'SHOPPING',
    label: 'Shopping',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

// eslint-disable-next-line react/prop-types
export default function EventForm({ category, updateCategory }) {
  const classes = useStyles();

  const handleChange = (event) => {
    updateCategory(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="select-category"
          select
          label="Select Category"
          value={category}
          onChange={handleChange}
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
