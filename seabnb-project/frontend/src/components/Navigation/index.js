import React from 'react';
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
// import sessionReducer from "../../store/session";
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

const Navigation =({ isLoaded })=> {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  // if a user is signed in
  if (sessionUser) {
    sessionLinks = (
      // render the profile button as a link
      <ProfileButton user={sessionUser} />
    );
  } else {
    // otherwise render the login/signup links
    sessionLinks = (
      <>
        <li>
          <LoginFormModal />
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
      </>
    );
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/">SeaBnb Home</NavLink>
        </li>
          {isLoaded && sessionLinks}
      </ul>
    </nav>
  );
}

export default Navigation;