import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css';


function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ confirmPassword, setConfirmPassword ] = useState('');
  const [ errors, setErrors ] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, firstName, lastName, password, confirmPassword }))
      .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  }

  // useEffect(()=> {
  //   const newErrors = [];
  //   if (password.length < 6 ) newErrors.push()

  //   setErrors(newErrors)
  // }, [ password ]);

  return (
    <div className="signin-container">
      <form className='signupForm' onSubmit={handleSubmit}>

        <div className="form-topper">
          <div className="x">X</div>
          <p>Welcome to Seabnb</p>
        </div>

        <ul className='sErrorMsgs'>
          {errors.map((error, idx) => (
            <li className='sErrorMsg' key={idx}>{error}</li>
            ))}
        </ul>

        <div className="labels-and-inputs">
          <div className="all-labels">
            <label>First Name: </label>
            <label>Last Name: </label>        
            <label>Email: </label>
            <label>Password: </label>
            <label>Confirm Password: </label>
          </div>
          <div className="all-inputs">
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required />
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required />
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required />
          </div>
        </div>

        <button type="submit" className="signup-btn">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormPage;