import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "Gachon",
  isClick: false,
};

const userSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    inputUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user); // 여기서 콘솔에 입력칸에 입력한 데이터가 실시간으로 적힘
    },
    okClick: (state) => {
      state.isClick = true;
    },
    resetUser: (state) => {
      state.isClick = false;
    },
  },
});

export const { inputUser, okClick, resetUser } = userSlice.actions;
export default userSlice.reducer;
