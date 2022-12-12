import { createSlice } from "@reduxjs/toolkit";

export interface IQuestions {}

const initialState: any = [];

export const questionsSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addDataPlayer: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addDataPlayer } = questionsSlice.actions;

export default questionsSlice.reducer;
