import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapse: false,
  closeCollapse: false,
  openCollapse: false,
  checkBox: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    closeCollapse: (state) => {
      state.collapse = !state;
    },
    openCollapse: (state) => {
      state.collapse = !state;
    },
    setCheckBox: (state) => {
      state.checkBox = !state;
    },
  },
});
//Actions creators are generated foreach case reducer function
export const { closeCollapse, openCollapse, setCheckBox } = userSlice.actions;

export default userSlice.reducer;
