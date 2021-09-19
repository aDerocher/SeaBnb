import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import SignupFormPage from '../SignupFormPage';
import WelcScrBody from '../WelcScrBody';
// import Footer from '../Footer';
import { useHistory } from 'react-router';
import './WelcomeScreen.css';


function WelcomeScreen({ isLoaded }) {
  const history = useHistory();

  const goToSpots=(e)=>{
    e.preventDefault();
    history.push('/spots');
  }

  return (
    // +++ Splash Picture (Container) +++++++++++++++++++++++++++
    <>
      <div className='splash-picture'>
        <Navigation isLoaded={isLoaded}/>
        { isLoaded && (
          <Switch>
            <Route path="/signup">
              <SignupFormPage />
            </Route>
          </Switch>
        )}
        
        {/* +++ Search Bar +++++++++++++++++++++ */}
        <div className="search-bar">
          <div className='search-i-container'>
            {/* 'for' attribute not working for the labels? Look up later for bug fixing */}
            <label id="location" className="searchbar-label">Location</label>
            <input name="location" type="text" className="s-location searchbar-input-box" placeholder="Where are you going?" />
          </div>
          <div className='search-i-container'>
            <label id="check-in" className="searchbar-label">Check in</label>
            <input name="check-in" type="text" className="s-checkin searchbar-input-box" placeholder="Add dates" />
          </div>
          <div className='search-i-container'>
            <label id="check-out" className="searchbar-label">Check out</label>
            <input name="check-out" type="text" className="s-checkout searchbar-input-box" placeholder="Add dates" />
          </div>
          <div className='search-i-container'>
            <label id="guests" className="searchbar-label">Guests</label>
            <input type="number" name="guests" min="1" max="16" className="s-guests searchbar-input-box" placeholder="Add guests" />
          </div>
          <div className="search-i-btn-icon"></div>  
          {/* <div className="search-i-btn-container">
            <button className="search-i-btn"> </button>
          </div>  */}
        </div>
        {/* +++ Not Sure Where to Go +++++++++++++++++++++  */}
        <div className='im-flex-container'>
          <h3>Not sure where to set sail? Perfect.</h3>
          <button className='im-flex-btn hover-hand' onClick={e=>goToSpots(e)}><span>I'm flexible</span></button>
        </div>
      </div>
      <WelcScrBody />
      {/* <Footer /> */}
    </>
  )
}

export default WelcomeScreen;