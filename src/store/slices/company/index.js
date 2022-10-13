import { createSlice } from "@reduxjs/toolkit";

export const companySlice = createSlice({
  name: "companys",
  initialState: {
    list: [],
  },
  reducers: {},
});

export default companySlice.reducer;
