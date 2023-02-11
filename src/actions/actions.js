import { LOGIN, LOGOUT, ERROR } from './actionTypes';

const logIn = (userObj) => ({
  type: LOGIN,
  payload: userObj,
});

const logOut = () => ({
  type: LOGOUT,
});

const error = () => ({
  type: ERROR,
});

export default {
  logIn,
  logOut,
  error,
};
