import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  collapse: "",
  name: "",
  email: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.collapse = action.payload.email;
      state.name = action.payload.name;
    },
  },
});
//Actions creators are generated foreach case reducer function
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
