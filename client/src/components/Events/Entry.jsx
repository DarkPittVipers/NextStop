/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
import React, { useContext, useState, useEffect } from 'react';
import {
  makeStyles, Grid, Paper, Typography, ButtonBase, FavoriteIcon, Button, IconButton, Fab,
} from '@material-ui/core/styles';
import axios from 'axios';
import AppContext from '../../helpers/context';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'green',
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
    backgroundColor: 'green',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  input: {
    display: 'none',
  },
}));

export default function Entry({
  index, name, tags, category, event,
}) {
  const [fav, setFav] = useState(false);
  const classes = useStyles();
  const { favorites, setFavorite } = useContext(AppContext);
  const getOnlyFirstFour = (array) => {
    const firstFour = array.slice(0, 4);
    return firstFour;
  };
  const eventTags = getOnlyFirstFour(tags);
  let source;
  const eventIcons = (cat) => {
    cat === 'RESTAURANT' ? source = 'https://www.creativefabrica.com/wp-content/uploads/2018/12/Restaurant-icon-vector-by-Hoeda80-580x386.jpg' : null;
    cat === 'NIGHTLIFE' ? source = 'https://image.shutterstock.com/image-illustration/dancing-couple-icon-element-party-260nw-1159039519.jpg' : null;
    cat === 'SIGHTS' ? source = 'https://image.shutterstock.com/image-vector/eye-icon-vector-260nw-1329652607.jpg' : null;
    cat === 'SHOPPING' ? source = 'https://image.shutterstock.com/image-vector/shopping-bag-vector-icon-260nw-661740685.jpg' : null;
    return source;
  };
  const icon = eventIcons(category);

  const saveEvent = (favoritedEvent) => {
    axios
      .put('/users/events', favoritedEvent)
      .then((response) => response)
      .catch((err) => {
        console.log('err saving event to user in client', err);
      });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} src={icon} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm containers>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Tags:
                  {' '}
                  {eventTags[0]}
                  {eventTags[1]
                    ? (
                      <span>
                        ,
                        {' '}
                        {eventTags[1]}
                      </span>
                    ) : null}
                  {eventTags[2]
                    ? (
                      <span>
                        ,
                        {' '}
                        {eventTags[2]}
                      </span>
                    ) : null}
                  {eventTags[3]
                    ? (
                      <span>
                        ,
                        {' '}
                        {eventTags[3]}
                      </span>
                    ) : null}
                </Typography>
                <div>
                  {fav === false ? (
                    <Fab
                      aria-label="like"
                      size="small"
                      onClick={(e) => {
                        e.preventDefault();
                        setFav(true);
                        saveEvent(event);
                        setFavorite([...favorites, event]);
                      }}
                    >
                      <FavoriteIcon />
                    </Fab>
                  ) : (
                    <Fab
                      disabled
                      aria-label="like"
                      size="small"
                    >
                      <FavoriteIcon />
                    </Fab>
                  )}
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}