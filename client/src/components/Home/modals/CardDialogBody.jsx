import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  Typography,
  TextField,
  Button,
  DialogContent,
} from '@material-ui/core';

import { uploadPhoto } from '../../../helpers/globalRequest';
import useStyles from '../styles';

export default function CardDialogBody({
  image, setImage, setBody, setUsername, validation,
}) {
  // Helps display errors related to the photo upload
  const [networkError, setNetworkError] = useState(null);

  const classes = useStyles();

  const addPhoto = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    uploadPhoto(file)
      .then((imageData) => {
        setImage(imageData.url);
      })
      .catch((err) => {
        setNetworkError(err);
      });
  };

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

        {image
          ? (
            <Container className={classes.formField} style={{ padding: 0 }}>
              <img src={image} alt="thumbnail" width="auto" height={100} className={classes.mainImg} />
            </Container>
          )
          : null}

        <Button
          variant="contained"
          component="label"
          className={classes.formField}
        >
          Upload Photo
          <input
            type="file"
            onChange={addPhoto}
            hidden
          />
        </Button>
      </form>
      <Typography color="error" variant="body1">{networkError !== null ? `Error: ${networkError.message}` : ''}</Typography>
    </DialogContent>
  );
}

CardDialogBody.propTypes = {
  image: PropTypes.string,
  setImage: PropTypes.func,
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
  image: '',
  setImage: () => { },
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
