import { createSlice } from "@reduxjs/toolkit";

export const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    isLogin: false,
    accessToken: "",
  },
  reducers: {
    loginAdmin: (state, action) => {
      state.isLogin = true;
      state.accessToken = action.payload.accessToken;
      return state;
    },
    clearAdmin: (state) => {
      state.isLogin = false;
      state.accessToken = "";
      return state;
    },
  },
});

export const { loginAdmin, clearAdmin } = adminAuthSlice.actions;
