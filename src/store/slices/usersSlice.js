import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";

const userSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
  },
  reducers: {},
});

export const userReducer = userSlice.reducer;
