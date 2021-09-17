import React from 'react';
import { useHistory } from 'react-router';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from '../ProfileButton';
import LoginFormModal from '../LoginFormModal';
import { login } from '../../store/session';
import './Navigation.css';
// import { NavLink } from "react-router-dom";
// import sessionReducer from "../../store/session";

const Navigation =({ isLoaded })=> {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  
  const history = useHistory();
  const goHome = () => { history.push('/'); }
  
  const goSignup = (e) => { 
    e.preventDefault();
    history.push('/signup'); 
  }
  const loginDemo = (e) => {
    e.preventDefault();
    const demoUser = {
      credential:"demo@seabnb.com",
      password:"demo!123" 
    }
    dispatch(login(demoUser))
  }

  useEffect(() => {

  }, [sessionUser])

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
          <div className='nav-l nav-l-h becomeHost' onClick={e=>goSignup(e)}><p className='nav-bold'>Become a host</p></div>
          <div className='nav-l nav-l-h' onClick={e=>loginDemo(e)}><p className='nav-bold'>⛒</p></div>
          <div className='nav-l nav-r'>
            <div><p className='signup-link nav-bold' onClick={e=>goSignup(e)} >☰</p></div>
            {isLoaded && sessionLinks}
          </div>
        </div>
      </nav>

  );
}

export default Navigation;