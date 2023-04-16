import { configureStore } from '@reduxjs/toolkit';

import searchReducer from './searchBarSlice';
import formReducer from './formSlice';
import { unsplashApi } from './apiSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    form: formReducer,
    [unsplashApi.reducerPath]: unsplashApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), unsplashApi.middleware],
});

export type AppStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
