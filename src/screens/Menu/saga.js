// Import helpers/effects 
import { call, put, take, all, fork } from 'redux-saga/effects'

import * as actions from './actions';
import * as api from '../../services/api';

/**
 * Worker saga for fetching menu: Will be fired on FETCH_MENU actions
 */
function* workFetchMenu(action) {
    try {
        const data = yield call(api.fetchMenu, action.payload.airportCode)
        // create and yield a dispatch Effect
        yield put(actions.fetchMenuSuccess(data))
    } catch (err) {

        yield put(actions.fetchMenuFailure(err))
        console.log(err, "here is the error")
        // handleError(err, '')
    }
}

/**
 * Watcher saga to fetch menu WAtcher saga->action->worker saga
 */
function* watchFetchMenu() {    
    while(true) {
        const action = yield take(actions.FETCH_MENU)
        yield call(workFetchMenu, action)
    }
}

/**
 * The root saga to fork menu watchers
 */
export default function* rootSaga() {
    yield all([fork(watchFetchMenu)])
}