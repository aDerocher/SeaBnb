import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'
import * as sessionActions from '../../store/session';
import { useDispatch } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import './LoginForm.css';


function LoginForm() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  const [ credential, setCredential ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ errors, setErrors ] = useState([]);

  useEffect(() => {
    let newErrors = [];
    if (!credential.includes("@")) newErrors.push("Please provide a valid email address")
    setErrors(newErrors);
  }, [password, credential])


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
    .catch(async (res) => {
      const data = await res.json();
      if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <>
    <form className='loginForm' onSubmit={handleSubmit}>
      <div className='form-topper'>
        <button>X</button>
        <p>Log in or sign up</p>
      </div>
      <ul className='fErrorMsgs'>
        {errors.map((error, idx) => (
          <li className='fErrorMsg' key={idx}>{error}</li>
        ))}
      </ul>

      <div className="login-form-all">

        <div className="login-email login-input-row">
          <label>Email: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />  
        </div>
        
        <div className="login-password login-input-row">
          <label>Password: </label>
          <input
            type="text"
            value={credential}
            onChange={(e) => setCredential(e.target.value)}
            required />
        </div>
      </div>

      <button type="submit" className="login-btn">Log In</button>

      <div className="sign-up-section">
        <NavLink to="/signup" className="sign-up-section-link">Sign up for Seabnb</NavLink>
      </div>
    </form>
    </>
  );
}

export default LoginForm;