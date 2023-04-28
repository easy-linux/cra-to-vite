import { createReducer } from '@reduxjs/toolkit'
import * as ACTIONS from './actions'

const initialState = { isLoading: false, users: [] }

const users = createReducer(initialState, (builder) => {
    builder
        .addCase(ACTIONS.getUsers.REQUEST, (state, action) => {
            state.isLoading = true
        })
        .addCase(ACTIONS.getUsers.SUCCESS, (state, action) => {
            const { users } = action.payload
            state.users = [...users]
            state.isLoading = false
        })
        .addCase(ACTIONS.getUsers.FAILURE, (state, action) => {
            state.isLoading = false
        })
        
})

export default users