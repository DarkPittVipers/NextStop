import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { Container, CssBaseline } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import Navigation from './components/Navigation.jsx';
import Home from './components/home/Home.jsx';

import { getCards } from './helpers/globalRequest';
import AppContext from './helpers/context';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards()
      .then((postArr) => {
        setCards(postArr);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppContext.Provider value={{}}>
        <CssBaseline />
        <Navigation />
        <Container maxWidth="lg">
          <Home cards={cards} />
        </Container>
      </AppContext.Provider>
    </ThemeProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
