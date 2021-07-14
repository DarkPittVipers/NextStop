import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navigation from './components/Navigation/Navigation.jsx';
import Home from './components/Home/Home.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';

import AppContext from './helpers/context';

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
  const classes = useStyles();

  const handleLogin = () => {
    axios.get('/userdata')
      .then((res) => {
        if (res.data !== '') {
          setUser(res.data.nickname);
          setUserLogin(res.data.nickname);
        }
      });
  };

  useEffect(() => {
    axios.get('/userdata')
      .then((res) => {
        if (res.data === '') {
          setUser('');
          setUserLogin('LOG IN');
        } else {
          setUser(res.data.nickname);
          setUserLogin(res.data.nickname);
        }
      })
      // eslint-disable-next-line no-console
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <AppContext.Provider value={{}}>
        <CssBaseline />
        <Navigation handleLogin={handleLogin} user={user} userLogin={userLogin} />
        <div className={classes.main}>
          <Router>
            <Switch>
              <Route path="/"><Home /></Route>
              <Route path="/userPro"><UserProfile user={user} /></Route>
            </Switch>
          </Router>
        </div>
      </AppContext.Provider>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('app'));
