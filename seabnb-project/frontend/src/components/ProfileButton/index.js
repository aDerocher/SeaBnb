import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { useHistory } from 'react-router';

function ProfileButton({ user }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  // const user = useSelector(state => state.session.user );

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
    console.log('1')
    if (!showMenu) return;
    console.log('2')
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
        <ul className="profile-dropdown">
          <li onClick={goToUserPage}>{user.firstName}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={e=>logout(e)}>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;