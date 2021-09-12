import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, NavLink, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import SignupFormPage from '../SignupFormPage';
import './WelcomeScreen.css';



function WelcomeScreen({ isLoaded }) {


  return (
    // +++ Splash Picture (Container) +++++++++++++++++++++++++++
    <div class='splash-picture'>
      <Navigation isLoaded={isLoaded}/>
      { isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
        </Switch>
      )}
      
      {/* +++ Search Bar +++++++++++++++++++++ */}
      <div class="search-bar">
        <div class='search-i-container'>
          <label for="location" class="searchbar-label">Location</label>
          <input name="location" type="text" class="s-location searchbar-input-box" placeholder="Where are you going?"></input>
        </div>
        <div class='search-i-container'>
          <label for="check-in" class="searchbar-label">Check in</label>
          <input name="check-in" type="text" class="s-checkin searchbar-input-box" placeholder="Add dates"></input>
        </div>
        <div class='search-i-container'>
          <label for="check-out" class="searchbar-label">Check out</label>
          <input name="check-out" type="text" class="s-checkout searchbar-input-box" placeholder="Add dates"></input>
        </div>
        <div class='search-i-container'>
          <label for="guests" class="searchbar-label">Guests</label>
          <input type="number" name="guests" min="1" max="16" class="s-guests searchbar-input-box" placeholder="Add guests"></input>
        </div>
        <div class="search-i-btn-icon"></div>  
         {/* <div class="search-i-btn-container">
          <button class="search-i-btn"> </button>
        </div>  */}
      </div>
       {/* +++ Not Sure Where to Go +++++++++++++++++++++  */}
      <div class='im-flex-container'>
        <h3>Not sure where to set sail? Perfect.</h3>
        <button class='im-flex-btn'><span>I'm flexible</span></button>
      </div>
    </div>

  )
}

export default WelcomeScreen;