import React from 'react';

import { Grid } from '@material-ui/core';

export default function Navigation() {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-between"
      style={{
        backgroundColor: '#8595da',
        borderBottom: '2px solid #4a62c8',
        height: 80,
        padding: '10px 30px',
        margin: 0,
      }}
    >
      <img src="assets/NextStopLogo.svg" height="64" alt="logo" />
    </Grid>
  );
}
