import React from 'react';
import NavigatePanel from '../NavigatePanel/navigatePanel';
import Background from '../../../public/images/castelbackground.png';
import './authorization.css';
import { users } from '../../constats';
import { Navigate } from 'react-router-dom';
import { logIn, logOut } from '../../actions/actions';
import { connect } from 'react-redux';

class Authorization extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { user, logIn, logOut } = this.props;

    const logInn = (e) => {
      e.preventDefault();
      const resultLogin = users.filter((user) =>
        Object.values(user)
          .toString()
          .includes(this.state.email && this.state.password),
      );
      if (!resultLogin.length) {
        alert('Введен неверный логин или пароль. Попробуйте еще раз.');
        {
          logOut;
        }
      }
      {
        logIn;
      }
    };

    return (
      <>
        <header style={{ backgroundImage: 'url(' + Background + ')' }}>
          <div className="container">
            <NavigatePanel logoImg="../../images/logo.svg" />
          </div>
          <form className="form_authorization" onSubmit={(e) => doSomething(e)}>
            <div className="authorization_title">Sign in</div>
            <div className="authorization_wrapper">
              <div className="authorization_input">
                <label className="authorization_label">Email address</label>
                <input
                  placeholder="Введите email"
                  type="email"
                  className="authorization_input_type"
                  onChange={(e) => this.setState({ email: e.target.value })}
                />
              </div>
              <div className="authorization_input">
                <label className="authorization_label">Password</label>
                <input
                  placeholder="Введите пароль"
                  type="password"
                  className="authorization_input_type"
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
              </div>
              <div className="authorization_input">
                <button
                  type="submit"
                  className="authorization_input_type authorization_button"
                  onClick={logInn}
                >
                  Sign in
                </button>
              </div>
            </div>
          </form>
        </header>
        {!!user && <Navigate to="/main" />}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logIn: () => dispatch(logIn()),
  logOut: () => dispatch(logOut()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Authorization);
