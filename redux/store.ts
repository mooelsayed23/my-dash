"use client";
import { configureStore } from "@reduxjs/toolkit";
import showAsiderReducer from "./feature/showside";
import showDashReducer from "./feature/showDashSlice";

export const store = configureStore({
  reducer: {
    showAsider: showAsiderReducer,
    showDash: showDashReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
