import React from 'react';
import PropTypes from 'prop-types';

import {
  TextField,
  DialogContent,
} from '@material-ui/core';

import useStyles from '../styles';

export default function CardDialogBody({
  setBody, setUsername, validation,
}) {
  const classes = useStyles();

  return (
    <DialogContent dividers>
      <form className="formContainer">
        <TextField
          variant="outlined"
          label="Username"
          placeholder="Example: jack543!"
          helperText={validation.username}
          error={validation.usernameError}
          fullWidth
          className={classes.formField}
          onChange={(e) => setUsername(e.target.value)}
        />

        <TextField
          multiline
          rows={6}
          variant="outlined"
          label="Description"
          helperText={validation.body}
          error={validation.bodyError}
          fullWidth
          className={classes.formField}
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
    </DialogContent>
  );
}

CardDialogBody.propTypes = {
  setBody: PropTypes.func,
  setUsername: PropTypes.func,
  validation: PropTypes.shape({
    body: PropTypes.string,
    bodyError: PropTypes.bool,
    username: PropTypes.string,
    usernameError: PropTypes.bool,
    email: PropTypes.string,
    emailError: PropTypes.bool,
  }),
};

CardDialogBody.defaultProps = {
  setBody: () => { },
  setUsername: () => { },
  validation: {
    body: '',
    bodyError: false,
    username: 'For privacy reasons, do not use your full name or email address',
    usernameError: false,
    email: 'For authentication reasons, you will not be emailed',
    emailError: false,
  },
};
