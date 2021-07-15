/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
import React, { useContext, useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

export default function Events({
  index, name, category, rating,
}) {
  return (
    <div>
      {name}
      {category}
      {rating}
    </div>
  );
}