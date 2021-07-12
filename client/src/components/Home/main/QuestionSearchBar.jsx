import React from 'react';
import PropTypes from 'prop-types';

import { Container, Typography, TextField } from '@material-ui/core';

export default function QuestionSearchBar({ setSearchValue }) {
  return (
    <Container style={{ padding: 3 }}>
      <Typography variant="h5">Questions &amp; Answers</Typography>
      <TextField onChange={(e) => setSearchValue(e.target.value)} placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." variant="outlined" style={{ width: '100%' }} />
    </Container>
  );
}

QuestionSearchBar.propTypes = {
  setSearchValue: PropTypes.func
};

QuestionSearchBar.defaultProps = {
  setSearchValue: () => {}
};
