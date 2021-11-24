import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router';
import './ProfileButton.css';

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user)
  const [showMenu, setShowMenu] = useState(false);
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  const goToUserPage = () => {
    history.push(`/users/${user.id}`);
  }

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    setShowMenu(false);
  };

  useEffect(() => {
  }, [sessionUser, user])

  useEffect(() => {
    if (!showMenu) return;
    const closeMenu = () => {
      setShowMenu(false);
    };
    document.addEventListener('click', closeMenu);
    return () => document.removeEventListener("click", closeMenu);
  }, [ showMenu ]);

  

  return (
    <>
      <button onClick={openMenu}>
        <i className="fas fa-anchor"></i>
      </button>
      {showMenu && (
        <>
        <ul className="profile-dropdown bonus-box">
          <li className="hover-hand" onClick={goToUserPage}>{user.firstName}</li>
          <li className="user-email-li">{user.email}</li>
          <li>
            <button onClick={e=>logout(e)} className="logout-btn hover-hand">Log Out</button>
          </li>
        </ul>
        <div className="">
        </div>
        </>
      )}
    </>
  );
}

export default ProfileButton;