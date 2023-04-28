import { createRoutine } from 'redux-saga-routines'

const payloadCreater = (value = {}) => value

const createActionsCreatorFlat = (zone_prefix, action_type, payloadCreator = payloadCreater, metaCreator = payloadCreater) => {
    const BASE_TYPE = `${zone_prefix}/${action_type}`
    return createRoutine(BASE_TYPE, payloadCreator, metaCreator)
}

export const createActionsCreator = (zone_prefix) => (action_type, payloadCreator = payloadCreater, metaCreator = payloadCreater) => createActionsCreatorFlat(zone_prefix, action_type, payloadCreator, metaCreator)
