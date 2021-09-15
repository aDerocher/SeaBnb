import React from 'react';
import {useHistory} from 'react-router'
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './NavigationTwo.css'

const NavigationTwo = ({isLoaded}) => {
  const sessionUser = useSelector(state => state.session.user);
  
  const history = useHistory();
  const goHome = () => { history.push('/'); }
  const goSignup = () => { history.push('/signup'); }

  let sessionLinks;
  // if a user is signed in
  if (sessionUser) {
    sessionLinks = (
      // render the profile button as a link
      <ProfileButton user={sessionUser} />
    );
  } else {
    // otherwise render the login/signup links
    sessionLinks = ( <LoginFormModal /> );
    // sessionLinks = (
    //   <>
    //     <li>
    //       <LoginFormModal />
    //     </li>
    //     <li>
    //       <NavLink to="/signup">Sign Up</NavLink>
    //     </li>
    //   </>
    // );
  }
  
  return (
    <nav className='nav-container2'>
      <div className="nav-logo2" onClick={goHome}>
      </div>

      <div className="search-bar2">
        <p className="s-2 searchbar-input-box2">Start your search</p>
        <div className="search-i-btn-icon2"></div>  
      </div>

      <div className='nav-profile-container'>
        <div className='nav-l nav-l-h wText'><p>Become a host</p></div>
        <div className='nav-l nav-l-h wText'><p className='nav-bold'>⛒</p></div>
        <div className='nav-l nav-r wText'>
          <div><p className='signup-link nav-bold' onClick={goSignup} >☰</p></div>
            {isLoaded && sessionLinks}
        </div>
      </div>
    </nav>
  );
}

export default NavigationTwo