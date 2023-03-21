import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  count: 0,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decreament: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
      console.log(state.count);
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});
export const { increament, decreament, incrementByAmount, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
