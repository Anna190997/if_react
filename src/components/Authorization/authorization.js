import React, { useState } from 'react';
import NavigatePanel from '../NavigatePanel/navigatePanel';
import Background from '../../../public/images/castelbackground.png';
import './authorization.css';
import { users } from '../../constats';
import { Navigate } from 'react-router-dom';

const Authorization = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [auth, setAuth] = useState('');
  const [disabled, setDisabled] = useState(true);

  const emailChange = (email) => {
    setEmail(email);
  };

  const passwordChange = (password) => {
    setPassword(password);
  };

  const change_email = (e) => {
    emailChange(e.target.value);
    setDisabled(false);
  };

  const change_password = (e) => {
    passwordChange(e.target.value);
    setDisabled(false);
  };

  const logIn = (e) => {
    e.preventDefault();
    const resultLogin = users.filter((user) =>
      Object.values(user)
        .toString()
        .includes(email && password),
    );
    if (!resultLogin.length) {
      alert('Введен неверный логин или пароль. Попробуйте еще раз.');
    }
    setAuth(resultLogin);
  };

  const handleKeyPress = (e) => {
    const key = e.keyCode || e.which;
    if (key === 13) {
      doSomething();
    }
  };

  return (
    <>
      <header style={{ backgroundImage: 'url(' + Background + ')' }}>
        <div className="container">
          <NavigatePanel logoImg="../../images/logo.svg" />
        </div>
        <form className="form_authorization" onKeyPress={handleKeyPress}>
          <div className="authorization_title">Sign in</div>
          <div className="authorization_wrapper">
            <div className="authorization_input">
              <label className="authorization_label">Email address</label>
              <input
                placeholder="Введите email"
                type="email"
                className="authorization_input_type"
                onChange={change_email}
              />
            </div>
            <div className="authorization_input">
              <label className="authorization_label">Password</label>
              <input
                placeholder="Введите пароль"
                type="password"
                className="authorization_input_type"
                onChange={change_password}
              />
            </div>
            <div className="authorization_input">
              <button
                type="submit"
                className="authorization_input_type authorization_button"
                onClick={logIn}
                disabled={disabled}
              >
                Sign in
              </button>
            </div>
          </div>
        </form>
      </header>
      {!!auth.length && <Navigate to="/main" />}
    </>
  );
};

export default Authorization;
