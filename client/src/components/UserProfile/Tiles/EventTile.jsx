import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import BookEvent from '../BookingModals/BookEvent.jsx';

export default function EventTile({ eventInfo, handleEventDelete }) {
  // const classes = useStyles();

  return (
    <div>
      <div>
        {eventInfo.name}
      </div>
      <Button onClick={() => handleEventDelete(eventInfo)} color="primary">
        Delete Event
      </Button>
      <BookEvent eventInfo={eventInfo} />
    </div>
  );
}

EventTile.propTypes = {
  eventInfo: PropTypes.shape({
    name: PropTypes.string,
  }),
  handleEventDelete: PropTypes.func,
};

EventTile.defaultProps = {
  eventInfo: { _id: 'Invalid ID' },
  handleEventDelete: () => { },
};
