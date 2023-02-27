import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { dateApi } from '../features/date/dateApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [dateApi.reducerPath]: dateApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dateApi.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
