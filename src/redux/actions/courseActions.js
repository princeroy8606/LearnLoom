import { toast } from "react-toastify";
import * as api from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { PaymentLaunch } from "../../utils/paymentlaunch";

export const fetchCourses = createAsyncThunk("courses/all", async () => {
  try {
    const { data } = await api.getAllCourses();
    return data;
  } catch (err) {
    toast.error(err?.response?.data?.error);
  }
});

export const buyCourse = createAsyncThunk(
  "courses/buy",
  async (Data) => {
    console.log(Data);
    try {
      const { data } = await api.buyOneCourse(Data);
      if (data) PaymentLaunch(data);
    } catch (err) {
      console.log(err)
      toast.error(err?.response?.data?.error);
    }
  }
);

export const addCourseToCart = createAsyncThunk("course/cart", async (courseData) => {
  try {
    const { data } = await api.addToCart(courseData);
    if(data) toast.success("added to Cart 🛒")
    return data;
  } catch (err) {
    toast.error(err?.message);
  }
});

export const RemoveCourseFromCart = createAsyncThunk("course/cart/remove", async (courseData) => {
    console.log(courseData,"reached")
    try {
      const { data } = await api.removeFromCart(courseData);
      if(data) toast.success("removed from Cart 🛒")
      return data;
    } catch (err) {
      toast.error(err?.message);
    }
  }
);


export const getAllCart = createAsyncThunk('course/allcarts',async(userData)=>{
    
    try {
        const { data } = await api.getCart(userData);
        return data;
      } catch (err) {
        toast.error(err?.message);
      }
})