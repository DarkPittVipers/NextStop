import React from 'react';

import { Grid } from '@material-ui/core';

export default function Navigation() {
  return (
    <Grid
      container
      alignItems="center"
      justify="space-between"
      style={{
        backgroundColor: '#1A535C',
        borderBottom: '2px solid #4a62c8',
        height: 80,
        padding: '10px 30px',
        margin: 0,
      }}
    >
      <img src="assets/Social3LogoSmall.png" alt="logo" />
    </Grid>
  );
}
