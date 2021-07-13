/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navigation from './components/Navigation.jsx';
import Home from './components/Home/Home.jsx';

import { getCards } from './helpers/globalRequest';
import AppContext from './helpers/context';

const useStyles = makeStyles(() => ({
  main: {
    backgroundColor: '#4ecdc4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
  },
}));

function App() {
  const [cards, setCards] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getCards()
      .then((postArr) => {
        setCards(postArr);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <AppContext.Provider value={{}}>
        <CssBaseline />
        <Navigation />
        <div className={classes.main}>
          <Home cards={cards} />
        </div>

      </AppContext.Provider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
