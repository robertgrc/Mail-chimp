import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapse: false,
  closeCollapse: false,
  openCollapse: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    closeCollapse: (state) => {
      state.collapse = false;
    },
    openCollapse: (state) => {
      state.collapse = true;
    },
  },
});
//Actions creators are generated foreach case reducer function
export const { setUser, closeCollapse, openCollapse } = userSlice.actions;

export default userSlice.reducer;
