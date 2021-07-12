import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  Typography,
  IconButton
} from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

import CardDialogBody from './CardDialogBody.jsx';
import useStyles from '../styles';
import { createCard } from '../helpers/cardRequests';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

// Title bar with a close button
const DialogTitleBar = withStyles(styles)((props) => {
  const {
    children,
    classes,
    onClose,
    ...other
  } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <DialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
});

export default function CardDialog() {
  // Boolean for if the modal is open or not
  const [open, setOpen] = useState(false);
  // Form data
  const [body, setBody] = useState('');
  const [username, setUsername] = useState('');
  const [image, setImage] = useState(null);
  // Validation object for showing info to user
  const [validation, setValidation] = useState({
    body: '',
    bodyError: false,
    username: 'For privacy reasons, do not use your full name or email address',
    usernameError: false,
    email: 'For authentication reasons, you will not be emailed',
    emailError: false
  });

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  /**
   * Validates the body string
   * @return {{body: string, bodyError: boolean}} body: helper text to display for errors,
   * bodyError: true if body is invalid and the form should display the error
   */
  const validateBody = () => {
    const validator = {};
    if (body.match(/[^a-zA-Z0-9!?.,():;"\n\-/ ]/) !== null) {
      validator.body = 'Invalid charaters used. Special characters available: (!?.,():;"-/)';
      validator.bodyError = true;
    } else if (body.length < 3) {
      validator.body = 'Needs to be at least 3 characters long';
      validator.bodyError = true;
    } else if (body.length > 1000) {
      validator.body = `Must be less than 1000 characters long. Length: ${body.length}`;
      validator.bodyError = true;
    } else {
      validator.body = '';
      validator.bodyError = false;
    }
    return validator;
  };

  /**
   * Validates the username string
   * @return {{username: string, usernameError: boolean}} username: helper text to display for
   * errors, usernameError: true if username is invalid and the form should display the error
   */
  const validateName = () => {
    const validator = {};
    if (username.match(/[^a-zA-Z0-9!?\-.]/) !== null) {
      validator.username = 'Invalid charaters used. Special characters available: (!?-.)';
      validator.usernameError = true;
    } else if (username.length < 3) {
      validator.username = 'Needs to be at least 3 characters long';
      validator.usernameError = true;
    } else if (username.length > 60) {
      validator.username = `Must be less than 60 characters long. Length: ${username.length}`;
      validator.usernameError = true;
    } else {
      validator.username = 'For privacy reasons, do not use your full name or email address';
      validator.usernameError = false;
    }
    return validator;
  };

  const validateCard = () => {
    const bodyValidator = validateBody();
    const nameValidator = validateName();
    const newValidator = { ...bodyValidator, ...nameValidator };

    if (!newValidator.bodyError && !newValidator.usernameError && !newValidator.emailError) {
      // If the card is valid create it
      const card = {
        description: body,
        username,
        image
      };
      createCard(card)
        .then(() => handleClose())
        .catch();
    } else {
      // Update validation with errors that are present in the form
      setValidation(newValidator);
    }
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Create a new card
      </Button>

      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitleBar id="customized-dialog-title" onClose={handleClose}>
          Create a card
        </DialogTitleBar>

        <CardDialogBody
          image={image}
          setImage={setImage}
          setBody={setBody}
          setUsername={setUsername}
          validation={validation}
        />

        <DialogActions>
          <Button autoFocus onClick={validateCard} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

CardDialog.propTypes = {
  classes: PropTypes.shape({
    // eslint-disable-next-line react/forbid-prop-types
    root: PropTypes.object,
    // eslint-disable-next-line react/forbid-prop-types
    closeButton: PropTypes.object
  })
};

CardDialog.defaultProps = {
  classes: { root: {}, closeButton: {} }
};
