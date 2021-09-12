import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import * as sessionActions from '../../store/session';
import { useDispatch} from 'react-redux';
// import { Redirect } from 'react-router-dom';
import './LoginForm.css';


function LoginForm() {
  const dispatch = useDispatch();
  // const sessionUser = useSelector(state => state.session.user);
  const [ credential, setCredential ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ errors, setErrors ] = useState([]);

  // if (sessionUser) return (
  //   <Redirect to="/" />
  // );


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
      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
    <NavLink to="/signup">Sign Up</NavLink>
    </>
  );
}

export default LoginForm;