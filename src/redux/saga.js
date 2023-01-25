// Dependencies
import {all, fork} from 'redux-saga/effects';

// Sagas
import authSaga from './stores/auth/saga';
import brandSaga from './stores/brands/saga';

export default function* root() {
  yield all([fork(authSaga), fork(brandSaga)]);
}
