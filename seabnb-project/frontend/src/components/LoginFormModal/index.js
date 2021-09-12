import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import './LoginFormButton.css';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div class='login-link nav-user-img' onClick={() => setShowModal(true)}></div>
      {showModal && (
        <div>
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
          </Modal>
        </div>
      )}
      {/* <button onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <div>
          <Modal onClose={() => setShowModal(false)}>
            <LoginForm />
          </Modal>
        </div>
      )} */}
    </>
  );
}

export default LoginFormModal;