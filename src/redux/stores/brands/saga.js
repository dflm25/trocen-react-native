import {put, call, takeLatest, all} from 'redux-saga/effects';

// Redux
import {setResponse} from '../../stores/app/actions';

// Utils
import request from '../../../utilities/request';

// Constants
import {GET_PAGINATION, CREATE_BRAND, UPDATE_BRAND, REMOVE_BRAND} from './constants';

function* getPagination(action) {  
  const {
    cb,
    payload: {page, store_id},
  } = action;
  const url = `api/brands?page=${page}&limit=10&store_id=${store_id}`;
  const requestOptions = {method: 'GET'};

  try {
    const response = yield call(request, url, requestOptions);
    yield put(setResponse('success', false, false, response, cb));
  } catch (error) {
    yield put(setResponse('error', false, false, error, cb));
  }
}

function* createBrand(action) {
  const {
    cb,
    payload,
  } = action;

  const requestOptions = {method: 'POST', body: JSON.stringify(payload)};

  try {
    const response = yield call(request, 'api/brands', requestOptions);
    yield put(setResponse('success', false, false, response, cb));
  } catch (error) {
    yield put(setResponse('error', false, false, error, cb));
  }
}

function* updateBrand(action) {
  const {
    cb,
    payload: { id, name },
  } = action;

  const url = `api/brands/${id}`
  const requestOptions = {method: 'PUT', body: JSON.stringify({ name })};

  try {
    const response = yield call(request, url, requestOptions);
    yield put(setResponse('success', false, false, response, cb));
  } catch (error) {
    yield put(setResponse('error', false, false, error, cb));
  }
}

function* removeBrand(action) {
  const {
    cb,
    payload: { id },
  } = action;

  const url = `api/brands/${id}`
  const requestOptions = {method: 'DELETE'};

  try {
    const response = yield call(request, url, requestOptions);
    yield put(setResponse('success', false, false, response, cb));
  } catch (error) {
    console.log('error', error)
    yield put(setResponse('error', false, false, error, cb));
  }
}


/**
 * Declare all component sagas
 */

export default function* rootSaga() {
  yield all([
    takeLatest(CREATE_BRAND, createBrand),
    takeLatest(GET_PAGINATION, getPagination),
    takeLatest(UPDATE_BRAND, updateBrand),
    takeLatest(REMOVE_BRAND, removeBrand),
  ]);
}
