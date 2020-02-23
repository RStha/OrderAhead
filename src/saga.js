import {fork, all} from 'redux-saga/effects'

import menuSaga from './screens/Menu/saga'

export default function* createSagas() {
    yield all([
        fork(menuSaga)
    ])
}