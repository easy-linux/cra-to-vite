import { all, spawn } from 'redux-saga/effects'

import { watchUsersSaga } from './users/sagas'
import { watchDialogSaga } from './dialog/sagas'


export default function* rootSaga() {
    yield all([
        spawn(watchUsersSaga),
        spawn(watchDialogSaga),
    ])
}