import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {}, // Slices will be added here later
});

// Types for dispatch and state
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
