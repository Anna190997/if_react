import {
  REQUESTED_HOTEL,
  REQUESTED_HOTEL_SUCCESS,
  REQUESTED_HOTEL_FAILED,
  FETCH_HOTEL
} from './actionTypes';

export const requestedHotel = () => {
  return {
    type: REQUESTED_HOTEL,
  };
};

export const fetchHotel = () => {
  return {
    type: FETCH_HOTEL,
  };
};

export const requestedHotelSuccess = (data) => {
  return {
    type: REQUESTED_HOTEL_SUCCESS,
    url: data,
  };
};

export const requestedHotelFailed = () => {
  return {
    type: REQUESTED_HOTEL_FAILED,
  };
};

