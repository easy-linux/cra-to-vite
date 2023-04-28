import { all, put, takeEvery } from 'redux-saga/effects'
import * as ACTIONS from './actions'

function* getUsersHandler(action) {
    yield put(ACTIONS.getUsers.request(action.payload))
    try {
        yield put(ACTIONS.getUsers.success(action.payload))
    } catch (e) {
        yield put(ACTIONS.getUsers.failure(e))
    }
}

export function* watchUsersSaga() {
    yield all([
        takeEvery(ACTIONS.getUsers.TRIGGER, getUsersHandler),
    ])
}