"use client";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface showState {
  value: boolean;
}

const initialState: showState = {
  value: false,
};

export const counterSlice = createSlice({
  name: "showAsider",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const selectCount = (state: RootState): boolean =>
  state.showAsider.value;
export const { toggle } = counterSlice.actions;
export default counterSlice.reducer;
