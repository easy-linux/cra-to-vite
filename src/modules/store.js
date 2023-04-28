import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redusers'
import createSagaMiddleware from 'redux-saga'
import { setupListeners } from '@reduxjs/toolkit/query'
import rootSaga from './sagas'
import { usersApi, userApi } from '../services'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, usersApi.middleware, userApi.middleware),
  devTools: true,
})

sagaMiddleware.run(rootSaga)

setupListeners(store.dispatch)

export default store