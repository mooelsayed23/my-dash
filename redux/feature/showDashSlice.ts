import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface ShowDashState {
  isVisible: boolean;
}

const initialState: ShowDashState = {
  isVisible: true,
};

export const showDashSlice = createSlice({
  name: "showDash",
  initialState,
  reducers: {
    toggle: (state) => {
      state.isVisible = !state.isVisible;
    },
    setIsVisible: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload;
    },
  },
});

export const selectIsVisible = (state: RootState): boolean =>
  state.showDash.isVisible;
export const { toggle, setIsVisible } = showDashSlice.actions;
export default showDashSlice.reducer;
