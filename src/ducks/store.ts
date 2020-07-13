import { combineReducers } from 'redux'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import warscrollReducer from './warscroll'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
    warscroll: warscrollReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore ({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: true,
})

export const persistor = persistStore(store)