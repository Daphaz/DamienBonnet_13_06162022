import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { userSlice } from './reducers';

export function makeStore() {
  return configureStore({
    reducer: { user: userSlice.reducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  { message: string },
  Action<string>
>;

export default store;
