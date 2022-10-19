import { combineReducers } from 'redux';
import hotelReducer from './hotelReducer';
import userStatus from './reducer';

export default combineReducers({
  userStatus,
  hotelReducer,
});
