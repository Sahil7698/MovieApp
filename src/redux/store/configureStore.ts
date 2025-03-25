import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';
import {persistReducer, persistStore} from 'redux-persist';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import demoSlice from '../slice/demoSlice';
import authSlice from '../slice/authSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducers = combineReducers({
  demoSlice: demoSlice,
  auth: authSlice,
});

export const USER_LOGOUT = 'USER_LOGOUT';
const rootReducer = (state: any, action: any) => {
  if (action.type === USER_LOGOUT) {
    AsyncStorage.removeItem('persist:root');
    (async () => {})();
    return reducers(undefined, action);
  }
  return reducers(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    __DEV__
      ? getDefaultMiddleware({
          serializableCheck: false,
        }).concat(logger)
      : getDefaultMiddleware(),
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
