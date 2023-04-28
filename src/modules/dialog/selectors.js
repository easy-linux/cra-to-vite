import { createSelector } from '@reduxjs/toolkit'

export const getDialogState = createSelector([state => state], ((state) => state.dialog))

export const getDialogIsOpened = createSelector(
    [getDialogState],
    (dialog) => {
        try {
            return dialog.isOpened
        } catch (e) { }
        return false
    }
)

export const getDialogParams = createSelector(
    [getDialogState],
    (dialog) => {
        try {
            return dialog.params
        } catch (e) { }
        return null
    }
)