import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'reduxjs-toolkit-persist'
import storage from 'reduxjs-toolkit-persist/lib/storage' // defaults to localStorage for web
import rootReducer from './rootReducer'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
})

export const persistor = persistStore(store)

