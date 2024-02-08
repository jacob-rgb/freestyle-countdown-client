import { configureStore } from '@reduxjs/toolkit';
import userSlice from './slices/user.slice';
import uxConfigSlice from './slices/uxConfig.slice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    uxConfig: uxConfigSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type stateDispatch = typeof store.dispatch;
