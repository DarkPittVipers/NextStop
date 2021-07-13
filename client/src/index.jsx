import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import {} from "@reach/router";

import Navigation from './components/Navigation.jsx';
import Home from './components/Home/Home.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';

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
  const [user, setUser] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getCards()
      .then((postArr) => {
        setCards(postArr);
      })
      .catch((err) => console.log(err));
  }, []);

  // const getUserInfo = () {
  //   axios.get('/profile', (req, res) => {
  //     setUser(res.locals.user)
  //   });
  // }

  // let UserProfile = () => <UserProfile />

  return (
    <div>
      <AppContext.Provider value={{}}>
        <CssBaseline />
        <Navigation />
        <div className={classes.main}>
          {/* <Link to="/"><Home /></Link> */}
          {/* <Link to="profile"><UserProfile /></Link> */}
          <UserProfile />
        </div>
      </AppContext.Provider>
      {/* <Route path="/"><Home /></Route>
      <Route path="/profile"><UserProfile /></Route> */}

    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));

// ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('app'));
