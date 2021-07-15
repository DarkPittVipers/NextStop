/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
import React, { useContext, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

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
}));

export default function Events({
  index, name, rank, tags, category,
}) {
  const classes = useStyles();
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
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}