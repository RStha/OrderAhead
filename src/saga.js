import {fork, all} from 'redux-saga/effects'

import menuSaga from './screens/Menu/saga'
 
//Collection of all the saga here, import and fork

export default function* createSagas() {
    yield all([
        fork(menuSaga)
    ])
}