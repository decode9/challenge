import createSagaMiddleware from 'redux-saga'
import reducer from './reducers'
import sagas from './sagas'
import { configureStore } from '@reduxjs/toolkit'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
      inmutableCheck: false
    }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== 'production'
})

store.sagaTask = sagaMiddleware.run(sagas)

export default store
