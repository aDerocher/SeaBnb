import React,{ useEffect } from 'react';
import {useHistory} from 'react-router'
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from '../ProfileButton';
import LoginFormModal from '../LoginFormModal';
import { login } from '../../store/session';
import './NavigationTwo.css'

const NavigationTwo = ({ isLoaded }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  const goHome = () => { history.push('/'); }

  const becomeHost = (e) => { 
    e.preventDefault();
    if(sessionUser) {
      history.push(`/users/${sessionUser.id}`)
    } else {
      history.push(`/signup`); 
    }; 
  }
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
    <nav className='nav-container2'>
      <div className="nav-logo2" onClick={goHome}>
      </div>

      <div className="search-bar2">
        <p className="s-2 searchbar-input-box2">Start your search</p>
        <div className="search-i-btn-icon2"></div>  
      </div>

      <div className='nav-profile-container'>
        <div className='nav-l nav-l-h wText becomeHost' onClick={e=>becomeHost(e)}><p>Become a host</p></div>
        <div className='nav-l nav-l-h wText' onClick={e=>loginDemo(e)}><p className='nav-bold'>⛒</p></div>
        <div className='nav-l nav-r wText'>
          <div><p className='signup-link nav-bold' >☰</p></div>
            {isLoaded && sessionLinks}
        </div>
      </div>
    </nav>
  );
}

export default NavigationTwo