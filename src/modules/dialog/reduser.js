import { createReducer } from '@reduxjs/toolkit'
import * as ACTIONS from './actions'

const initialState = { isOpened: false, params: null }

const dialog = createReducer(initialState, (builder) => {
    builder
        .addCase(ACTIONS.openDialog.REQUEST, (state, action) => {
            // change something BEFORE
        })
        .addCase(ACTIONS.openDialog.SUCCESS, (state, action) => {
            // change something AFTER SUCCESS
            const { params } = action.payload
            state.params = { ...params }
            state.isOpened = true
        })
        .addCase(ACTIONS.openDialog.FAILURE, (state, action) => {
            // change something if ERROR happened
            state.isOpened = false
        })
        .addCase(ACTIONS.closeDialog.SUCCESS, (state, action) => {
            // change something AFTER SUCCESS
            state.params = null
            state.isOpened = false
        })
        .addCase(ACTIONS.closeDialog.FAILURE, (state, action) => {
            // change something if ERROR happened
        })

})

export default dialog