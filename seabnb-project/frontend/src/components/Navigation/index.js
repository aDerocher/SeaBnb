import React from 'react';
import { useHistory } from 'react-router';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import sessionReducer from "../../store/session";
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

const Navigation =({ isLoaded })=> {
  const sessionUser = useSelector(state => state.session.user);

  const history = useHistory();
  
  const goHome = () => {
    history.push('/');
  }
  const goSignup = () => {
    history.push('/signup');
  }

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
    <nav className='nav-container'>

      {/* <ul> */}
        {/* <li>
          <NavLink exact to="/">SeaBnb Home</NavLink>
        </li> */}
          {/* {isLoaded && sessionLinks} */}
      {/* </ul> */}

        <div className="nav-logo" onClick={goHome}>
        </div>

        <div className="nav-quick-links">
          <p>Places to stay</p>
          <p>Experiences</p>
          <p>Online Experiences</p>
        </div>

        <div className='nav-profile-container'>
          <div className='nav-l nav-l-h'><p className='nav-bold'>Become a host</p></div>
          <div className='nav-l nav-l-h'><p className='nav-bold'>⛒</p></div>
          <div className='nav-l nav-r'>
            <div><p className='signup-link' onClick={goSignup} >☰</p></div>
            {isLoaded && sessionLinks}
          </div>
        </div>
      </nav>

  );
}

export default Navigation;