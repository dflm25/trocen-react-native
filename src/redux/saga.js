// Dependencies
import {all, fork} from 'redux-saga/effects';

// Sagas
import authSaga from './stores/auth/saga';
import patientSaga from './stores/patients/saga';

export default function* root() {
  yield all([fork(authSaga), fork(patientSaga)]);
}
