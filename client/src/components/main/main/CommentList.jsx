import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import {
  Container, Typography, Button, Grid
} from '@material-ui/core';

import CommentItem from './CommentItem.jsx';
import CommentDialog from '../modals/CommentDialog.jsx';

export default function CommentList({ cardId, comments }) {
  // Stores information about comments to display and how many
  const [displayCount, setDisplayCount] = useState(2);
  const [displayComments, setDisplayComments] = useState([]);

  const updateComments = () => {
    // Fill the display comments arr with the appropriate amount of questions
    const displayArr = [];
    for (let i = 0; i < displayCount && i < comments.length; i += 1) {
      displayArr.push(comments[i]);
    }
    setDisplayComments(displayArr);
  };

  useEffect(() => {
    updateComments();
  }, [displayCount]);

  return (
    <Container justify="flex-start" style={{ padding: 3, borderRadius: '0px 0px 3px 3px', border: '1px solid #555' }}>
      <Grid container direction="row" alignItems="center" justify="space-between">
        <Typography variant="h6">{comments.length > 0 ? 'Comments' : 'No comments yet'}</Typography>
        <CommentDialog cardId={cardId} />
      </Grid>
      {
        // eslint-disable-next-line no-underscore-dangle
        displayComments.map((comment) => <CommentItem key={comment._id} comment={comment} />)
      }
      {
        displayCount < comments.length
          ? (
            <Button type="button" onClick={() => setDisplayCount(displayCount + 2)}>
              Load More Comments
            </Button>
          )
          : null
      }
    </Container>
  );
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
  cardId: PropTypes.string
};

CommentList.defaultProps = {
  comments: [],
  cardId: ''
};
