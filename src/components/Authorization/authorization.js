import React, { useState } from 'react';
import NavigatePanel from '../NavigatePanel/navigatePanel';
import Background from '../../../public/images/castelbackground.png';
import './authorization.css';
import { users } from '../../constats';
import { Navigate } from 'react-router-dom';

const Authorization = () => {
  const [email, setEmail] = useState('Введите e-mail');
  const emailChange = (email) => {
    setEmail(email);
  };
  const [password, setPassword] = useState('Введите пароль');
  const passwordChange = (password) => {
    setPassword(password);
  };
  const [auth, setAuth] = useState([]);
  const logIn = () => {
    const resultLogin = users.filter((user) =>
      Object.values(user)
        .toString()
        .includes(email && password),
    );
    setAuth(resultLogin);
  };

  return (
    <>
      <header style={{ backgroundImage: 'url(' + Background + ')' }}>
        <div className="container">
          <NavigatePanel logoImg="../../images/logo.svg" />
        </div>
        <form className="form_authorization">
          <div className="authorization_title">Sign in</div>
          <div className="authorization_wrapper">
            <div className="authorization_input">
              <label className="authorization_label">Email address</label>
              <input
                type="email"
                className="authorization_input_type"
                onChange={(event) => {
                  emailChange(event.target.value);
                }}
              />
            </div>
            <div className="authorization_input">
              <label className="authorization_label">Password</label>
              <input
                type="password"
                className="authorization_input_type"
                onChange={(event) => {
                  passwordChange(event.target.value);
                }}
              />
            </div>
            <div className="authorization_input">
              <input
                type="button"
                className="authorization_input_type authorization_button"
                onClick={logIn}
                value="Sign in"
              />
            </div>
          </div>
        </form>
      </header>
      {!!auth.length && <Navigate to="/main" />}
    </>
  );
};

export default Authorization;
