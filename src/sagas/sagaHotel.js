import { takeEvery, call, put, select } from 'redux-saga/effects';
import {
  requestedHotel,
  requestedHotelSuccess,
  requestedHotelFailed,
} from '../actions/hotelActions';

import { FETCH_HOTEL } from '../actions/actionTypes';

export function* watchFetchHotel() {
  yield takeEvery(FETCH_HOTEL, fetchHotelResult);
}

export function* fetchHotelResult() {
  try {
    const search = yield select((state) => state.hotelReducer.search);
    const adults = yield select((state) => state.hotelReducer.adults);
    const rooms = yield select((state) => state.hotelReducer.rooms);
    const children = yield select((state) => state.hotelReducer.children);
    const dateFrom = yield select((state) => state.hotelReducer.dateFrom);
    const dateTo = yield select((state) => state.hotelReducer.dateTo);
    yield put(requestedHotel());
    const data = yield call(() => {
      return fetch(
        `https://fe-student-api.herokuapp.com/api/hotels?
        search=${search}
        &dateFrom=${dateFrom}
        &dateTo=${dateTo}
        &adults=${adults}
        &children=${children}
        &rooms=${rooms}`,
      ).then((res) => res.json());
    });
    yield put(requestedHotelSuccess(data));
  } catch (error) {
    yield put(requestedHotelFailed());
  }
}
