import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import countReducer from './count'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
    counter: countReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore ({
  reducer: persistedReducer,
  devTools: true,
})

export const persistor = persistStore(store)