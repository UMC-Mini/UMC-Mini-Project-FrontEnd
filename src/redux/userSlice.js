import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
  value: {
    token: "",
    userId: "",
    userName: "",
    userNickname: ""
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      const { token, userId, userName, userNickname } = action.payload.result;
      state.value.token = token;
      state.value.userId = userId;
      state.value.userName = userName;
      state.value.userNickname = userNickname;
      state.isLogin = true;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("userId", userId);
      localStorage.setItem("userName", userName);
      localStorage.setItem("userNickname", userNickname);
    },
    logoutAction: (state) => {
      Object.assign(state, initialState);
      localStorage.clear();
    },
    deleteAction: (state) => {
      Object.assign(state, initialState);
      localStorage.clear();
    },
    modifyAction: (state, action) => {
      const { userNickname } = action.payload;
      state.value.userNickname = userNickname;
      localStorage.setItem("userNickname", userNickname);
    }
  },
});

export const { loginData, loginAction, logoutAction, deleteAction, modifyAction } = userSlice.actions;
export default userSlice.reducer;