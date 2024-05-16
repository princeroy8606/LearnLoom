import { createSlice } from "@reduxjs/toolkit";
import { loginAction, registerAcion } from "../actions/authActions";
import {
  RemoveCourseFromCart,
  addCourseToCart,
} from "../actions/courseActions";

const initialState = {
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateUserData: (state, action) => {
      console.log("reached Slice ", action);
      state.userData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
    builder.addCase(registerAcion.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
    builder.addCase(addCourseToCart.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
    builder.addCase(RemoveCourseFromCart.fulfilled, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export const { updateUserData } = authSlice.actions;

export default authSlice.reducer;
