import React,{ useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from '../ProfileButton';
import LoginFormModal from '../LoginFormModal';
import { login } from '../../store/session';
import './Navigation.css';

const Navigation =({ isLoaded })=> {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory();
  
  const becomeHost = (e) => { 
    e.preventDefault();
    if(sessionUser) {
      history.push(`/users/${sessionUser.id}`)
    } else {
      history.push(`/signup`); 
    }; 
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
  }

  return (
    <nav className='nav-container'>
      <div className="nav-logo"><NavLink to='/'></NavLink>
      </div>

      <div className="nav-quick-links">
        <p><NavLink to='/spots' style={{textDecoration: "none", color: "white"}}>Places to stay</NavLink></p>
        <p><NavLink to='/spots' style={{textDecoration: "none", color: "white"}}>Experiences</NavLink></p>
        <p><NavLink to='/spots' style={{textDecoration: "none", color: "white"}}>Online Experiences</NavLink></p>
      </div>

      <div className='nav-profile-container'>
        <div className='nav-l nav-l-h becomeHost' onClick={e=>becomeHost(e)}><p className='nav-bold'>Become a host</p></div>
        {!sessionUser && 
            <div className='nav-l nav-l-h' onClick={e=>loginDemo(e)}><p className='hover-hand nav-bold'>⛒ <span> Demo User</span></p></div>
        }
        <div className='nav-l nav-r'>
          {isLoaded && sessionLinks}
        </div>
      </div>
    </nav>
  );
}

export default Navigation;