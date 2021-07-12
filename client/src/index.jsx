import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Container, CssBaseline } from '@material-ui/core';
<<<<<<< HEAD
import { createTheme, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
=======
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
>>>>>>> fec8110f9a0b0532b7fb2087029162c6502a382b

import Navigation from './components/Navigation.jsx';
import Home from './components/Home/Home.jsx';

import { getCards } from './helpers/globalRequest';
import AppContext from './helpers/context';
<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   palette: {
//     type: 'dark',
//   },
// });

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: '#4ecdc4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
=======

const theme = createTheme({
  palette: {
    type: 'dark',
>>>>>>> fec8110f9a0b0532b7fb2087029162c6502a382b
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
          <div  className={classes.main}>
          <Home cards={cards} />
          </div>

        </AppContext.Provider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
