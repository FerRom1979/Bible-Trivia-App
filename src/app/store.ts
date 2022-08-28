import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlices";

const store = configureStore({
  reducer: { auth: authReducer },
});

export default store;