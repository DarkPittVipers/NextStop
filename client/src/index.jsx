/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { Route, Switch, HashRouter } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navigation from './components/Navigation/Navigation.jsx';
import Home from './components/Home/Home.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import { AppContext } from './helpers/context';

const useStyles = makeStyles(() => ({
  main: {
    backgroundColor: '#4ecdc4',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    width: 'auto',
  },
}));

function App() {
  const [user, setUser] = useState('');
  const [userLogin, setUserLogin] = useState('LOG IN');
  const [loginBtnDisplay, setLoginBtnDisplay] = useState('true');
  const [profileBtnDisplay, setProfileBtnDisplay] = useState('true');
  const [flights, setFlights] = useState([]);
  const [hotels, setHotels] = useState([]);
  const classes = useStyles();
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    axios.get('/user/data')
      .then((res) => {
        if (res.data === '') {
          setUser('');
          setUserLogin('LOG IN');
          setLoginBtnDisplay('true');
          setProfileBtnDisplay('none');
        } else {
          setUser(res.data.nickname);
          setUserLogin(res.data.nickname);
          setProfileBtnDisplay('true');
          setLoginBtnDisplay('none');
        }
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <HashRouter>
      <Switch>
        <div>
          <AppContext.Provider value={{
            flights,
            setFlights,
            hotels,
            setHotels,
            favorites,
            setFavorites,
          }}
          >
            <CssBaseline />
            <Navigation
              user={user}
              userLogin={userLogin}
              loginBtnDisplay={loginBtnDisplay}
              profileBtnDisplay={profileBtnDisplay}
            />
            <div className={classes.main}>
              <Route path="/profile" exact component={UserProfile} />
              <Route path="/home" exact component={Home} />
              <Route path="/" exact component={Home} />
            </div>
          </AppContext.Provider>
        </div>
      </Switch>
    </HashRouter>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
