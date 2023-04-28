import {createActionsCreator} from '../actionCreator'

const actionCreator = createActionsCreator('USERS')

export const getUsers = actionCreator('GET_USERS')