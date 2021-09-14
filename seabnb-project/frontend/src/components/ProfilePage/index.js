import React, { useEffect } from 'react';
import { restoreUser } from '../../store/session';
import { useSelector, useDispatch } from 'react-redux';
import './ProfilePage.css';
// import { useHistory } from 'react-router';

function ProfilePage(){

    
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(restoreUser());
  }, [ dispatch ]);
    
  const user = useSelector(state => {
    // console.log(aSpot,'<===========aSpot============')
    return state.session.user;
  });
  console.log(user,'<============user=============')
  // console.log(spot,'<============spot==============')
  // console.log(spots[0].photo1,'<==============================')

  return(
    <div>
      <h2>{user.firstName}</h2>
    </div>
  )
}

export default ProfilePage;