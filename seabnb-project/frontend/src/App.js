import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import * as sessionActions from "./store/session";
import WelcomeScreen from './components/WelcomeScreen';
// import { Route, Switch } from 'react-router-dom';
// import SignupFormPage from './components/SignupFormPage';
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
      <WelcomeScreen isLoaded={isLoaded} />
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
