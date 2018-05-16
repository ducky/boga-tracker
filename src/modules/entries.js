import { createActions, handleActions } from 'redux-actions';
import { all, call, put, select, takeEvery } from 'redux-saga/effects';

// Api
import { fetchLocalEntries, saveLocalEntries } from 'lib/api';

// Modules
import { actions as toastActions } from 'modules/toast';

// Utils
import { replaceItem, removeItem } from 'utils/array';

// Constants
import DEFAULT_ENTRIES from 'constants/defaultEntries';

// State
const defaultState = {
  data: [],
  loading: true,
};

// Selectors
export const selectors = {
  entries: state => state.entries.data,
  loading: state => state.entries.loading,
};

// Actions
export const actions = createActions('FETCH_ENTRIES', 'DELETE_ENTRY', 'SAVE_ENTRY', 'REPLACE_ENTRIES');

// Sagas
export function* fetchEntriesSaga() {
  try {
    const entries = yield call(fetchLocalEntries, DEFAULT_ENTRIES);
    yield put(actions.replaceEntries(entries));
  } catch (e) {
    console.log(e);
  }
}

export function* saveEntrySaga({ payload: { isUpdate, ...entry } }) {
  try {
    const currentEntries = yield select(selectors.entries);
    const entries = yield call(saveLocalEntries, replaceItem(currentEntries, entry));

    yield put(actions.replaceEntries(entries));
    yield put(
      toastActions.createToast('success', {
        title: isUpdate ? `Entry Updated` : `Entry Saved`,
        message: isUpdate ? `Entry updated successfully` : `Entry saved successfully!`,
      })
    );
  } catch (e) {
    yield put(
      toastActions.createToast('alert', {
        title: `Save Failure`,
        message: `Failed to save! Please try again later or refresh the page.`,
      })
    );
  }
}

export function* deleteEntrySaga({ payload: entry }) {
  try {
    const currentEntries = yield select(selectors.entries);
    const entries = yield call(saveLocalEntries, removeItem(currentEntries, entry));

    yield put(actions.replaceEntries(entries));
    yield put(
      toastActions.createToast('success', {
        title: `Entry Removed`,
        message: `Entry removed successfully!`,
      })
    );
  } catch (e) {
    yield put(
      toastActions.createToast('alert', {
        title: `Remove Failure`,
        message: `Entry failed to remove! Please try again later or refresh the page.`,
      })
    );
  }
}

export function* entriesSaga() {
  yield all([
    takeEvery(actions.fetchEntries, fetchEntriesSaga),
    takeEvery(actions.saveEntry, saveEntrySaga),
    takeEvery(actions.deleteEntry, deleteEntrySaga),
  ]);
}

// Reducer
export default handleActions(
  {
    [actions.replaceEntries](state, { payload: data }) {
      return { ...state, data, loading: false };
    },
  },
  defaultState
);
