import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import WelcomeScreen from './components/WelcomeScreen';
import { Route, Switch } from 'react-router-dom';
import SignupFormPage from './components/SignupFormPage';
import SpotBrowser from './components/SpotBrowser';
import SpotPage from './components/SpotPage';
import NavigationTwo from './components/NavigationTwo';
import ProfilePage from './components/ProfilePage';
import NotFound from './components/NotFound';
import Footer from './components/Footer';
import HostedSpots from './components/HostedSpots';
// import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return isLoaded && (
    <>
      {/* <Navigation isLoaded={isLoaded} /> */}
      <Switch>
        <Route exact path="/">
          <WelcomeScreen isLoaded={isLoaded} />
          <Footer />
        </Route>
        <Route exact path="/signup">
          <NavigationTwo isLoaded={isLoaded}/>
          <SignupFormPage />
          <Footer />
        </Route>
        <Route exact path="/spots/:spotId">
          <NavigationTwo isLoaded={isLoaded}/>
          <SpotPage />
          <Footer />
        </Route>
        <Route exact path="/spots">
          <NavigationTwo isLoaded={isLoaded}/>
          <SpotBrowser />
          <Footer />
        </Route>
        <Route exact path="/users/:id">
          <NavigationTwo isLoaded={isLoaded}/>
          <ProfilePage />
          <Footer />
        </Route>
        <Route exact path="/users/:id/becomeahost">
          <NavigationTwo isLoaded={isLoaded}/>
          <HostedSpots />
          <Footer />
        </Route>
        <Route >
          <NavigationTwo isLoaded={isLoaded}/>
          <NotFound />
          <Footer />
        </Route>
      </Switch>
      {/* { isLoaded && (
        <Switch>
          <Route exact path="/">
            <WelcomeScreen />
            </Route>
            <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )} */}
    </>
  );
}

export default App;
