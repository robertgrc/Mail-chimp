import { configureStore } from "@reduxjs/toolkit";
// reducer
import company from "./slices/company";
import userSlice from "./slices/user/userSlice";

export default configureStore({
  reducer: {
    company,
    userSlice,
  },
});
