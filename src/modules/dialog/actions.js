import {createActionsCreator} from '../actionCreator'

const actionCreator = createActionsCreator('DIALOG')

export const openDialog = actionCreator('OPEN_DILAOG')
export const closeDialog = actionCreator('CLOSE_DILAOG')