import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Login, Pricing, Register, Usage, Features, Dashboard } from './routes';
import Landing from './landing';
import Profile from './components/dashboard/pages/profile';
import { API } from './service/API';

// these will be the main pages for non signed in users
function Home() {
  const [user, setUser] = useState(null);
  //checks for logged in user session on render, for persisting user across refreshing browser
  useEffect(() => {
    async function init() {
      const u = API.auth.init();
      if (!u.email) setUser(null);
      else setUser(u);
    }
    init();
  }, []);

  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/features">
          <Features />
        </Route>
        <Route exact path="/usage">
          <Usage />
        </Route>
        <Route exact path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/logIn">
          {user ? <Redirect to="/dashboard" /> : <Login setUser={setUser} />}
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/dashboard">
          {user ? <Dashboard user={user} setUser={setUser} /> : <Redirect to="/logIn" />}
        </Route>
        <Route exact path="/dashboard/settings">
          <Profile />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default Home;
