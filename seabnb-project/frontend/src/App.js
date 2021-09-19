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
        <Route path="/signup">
          <NavigationTwo />
          <SignupFormPage />
          <Footer />
        </Route>
        <Route path="/spots/:spotId">
          <NavigationTwo isLoaded={isLoaded}/>
          <SpotPage />
          <Footer />
        </Route>
        <Route path="/spots">
          <NavigationTwo />
          <SpotBrowser />
          <Footer />
        </Route>
        <Route path="/users/:id">
          <NavigationTwo />
          <ProfilePage />
          <Footer />
        </Route>
        <Route >
          <NavigationTwo />
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
