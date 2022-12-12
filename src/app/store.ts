import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlices";
import questionsSlices from "../features/questions/questionsSlices";
import playerSlice from "../features/player/playerSlice";

const store = configureStore({
  reducer: { auth: authReducer, questions: questionsSlices, player: playerSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
