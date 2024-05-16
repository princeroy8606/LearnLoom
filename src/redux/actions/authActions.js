import { toast } from "react-toastify";
import * as api from "../../api/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginAction = createAsyncThunk("auth/login", async (loginData) => {
  try {
    const { data } = await api.login(loginData);
    return data;
  } catch (err) {
    toast.error(err?.response?.data?.error);
  }
});

export const registerAcion = createAsyncThunk(
  "auth/signup",
  async (regData) => {
    console.log(regData);
    try {
      const { data } = await api.signUp(regData);
      return data;
    } catch (err) {
      toast.error(err?.message);
    }
  }
);

export const checkPayemntSuccess = createAsyncThunk(
  "auth/update",
  async (resdata) => {
    console.log("resData",resdata)
    try {
      const { data } = await api.successPaymentRes(resdata);
      console.log(data)
      return data
    } catch (err) {
      toast.error(err?.message);
    }
  }
);
