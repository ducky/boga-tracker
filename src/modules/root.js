import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import entries, { entriesSaga } from 'modules/entries';
import modal from 'modules/modal';
import toast from 'modules/toast';

export function* rootSaga() {
  yield all([entriesSaga()]);
}

export const rootReducer = combineReducers({
  entries,
  modal,
  toast,
});
