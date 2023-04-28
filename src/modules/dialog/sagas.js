import { all, put, takeEvery } from 'redux-saga/effects'
import * as ACTIONS from './actions'

function* openDialogHandler(action) {
    yield put(ACTIONS.openDialog.request(action.payload))
    try {
        yield put(ACTIONS.openDialog.success(action.payload))
    } catch (e) {
        yield put(ACTIONS.openDialog.failure(e))
    }
}

function* closeDialogHandler(action) {
    yield put(ACTIONS.closeDialog.request(action.payload))
    try {
        yield put(ACTIONS.closeDialog.success(action.payload))
    } catch (e) {
        yield put(ACTIONS.closeDialog.failure(e))
    }
}

export function* watchDialogSaga() {
    yield all([
        takeEvery(ACTIONS.openDialog.TRIGGER, openDialogHandler),
        takeEvery(ACTIONS.closeDialog.TRIGGER, closeDialogHandler),
    ])
}