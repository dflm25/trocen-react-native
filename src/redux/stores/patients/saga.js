import {put, call, takeLatest} from 'redux-saga/effects';

// Redux
import {setResponse} from '../../stores/app/actions';

// Utils
import request from '../../../utilities/request';

// Constants
import {GET_ALL} from './constants';

function* getAll(action) {
  const {
    cb,
    payload: {id},
  } = action;
  const url = `get-resources?id=${id}`;
  const requestOptions = {method: 'GET'};

  try {
    const response = yield call(request, url, requestOptions);
    yield put(setResponse('success', false, false, response, cb));
  } catch (error) {
    console.log('error', error);
    yield put(setResponse('error', false, false, error, cb));
  }
}

/**
 * Declare all component sagas
 */

export default function* rootSaga() {
  yield takeLatest(GET_ALL, getAll);
}
