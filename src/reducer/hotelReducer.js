import {
  REQUESTED_HOTEL,
  REQUESTED_HOTEL_SUCCESS,
  REQUESTED_HOTEL_FAILED,
} from '../actions/actionTypes';

const initialState = {
  url: [],
  loading: false,
  error: false,
  search: '',
  adults: '',
  children: '',
  rooms: '',
  dateFrom: '',
  dateTo: '',
};

const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUESTED_HOTEL:
      return {
        ...state,
        url: [],
        loading: true,
        error: false,
        search: action.search,
        adults: action.adults,
        children: action.children,
        rooms: action.rooms,
        dateFrom: action.dateFrom,
        dateTo: action.dateTo,
      };
    case REQUESTED_HOTEL_SUCCESS:
      return {
        ...state,
        url: action.url,
        loading: false,
        error: false,
      };
    case REQUESTED_HOTEL_FAILED:
      return {
        ...state,
        url: [],
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default hotelReducer;
