import { LOGIN, LOGOUT, ERROR } from '../actions/actionTypes';

const userStatus = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
        auth: true,
      };
    case ERROR:
      return {
        ...state,
        user: {},
        auth: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: {},
        auth: false,
      };
    default:
      return state;
  }
};

export default userStatus;
