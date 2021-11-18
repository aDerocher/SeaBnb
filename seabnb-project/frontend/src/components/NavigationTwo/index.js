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
        {!sessionUser && 
            <div className='nav-l nav-l-h wText' onClick={e=>loginDemo(e)}>
                <p className='hover-hand nav-bold'>
                    ⛒ 
                <span> Demo User</span>
                </p>
            </div>
        }
        <div className='nav-l nav-r wText'>
            {sessionUser?.id &&
                <ProfileButton user={sessionUser} />
            }
            {!sessionUser?.id &&
                <LoginFormModal />
            }
        </div>
      </div>
    </nav>
  );
}

export default NavigationTwo