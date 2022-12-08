import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlices";
import questionsSlices from "../features/questions/questionsSlices";

const store = configureStore({
  reducer: { auth: authReducer, questions: questionsSlices },
});

export default store;
