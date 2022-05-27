import { put, all, takeEvery, call } from 'redux-saga/effects';

import { Action, ResponseGenerator } from 'types/action';
import Api from 'shared/config/api';
import { REQUEST, SUCCESS, FAILURE } from '../constants';

function* infoSubscription(action: Action) {}

function* homeSaga() {
  // yield all([takeEvery(REQUEST(homeConstants), infoSubscription)]);
}

export default homeSaga;
