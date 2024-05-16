import { createSlice } from "@reduxjs/toolkit";
import { fetchCourses, getAllCart } from "../actions/courseActions";

const initialState = {
  allCourses: null,
  carts: null,
  mycourses: null,
};

export const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.allCourses = action?.payload;
    });
    builder.addCase(getAllCart.fulfilled, (state, action) => {
      state.carts = action?.payload;
    });
  },
});

export default courseSlice.reducer;
