import { createSlice } from "@reduxjs/toolkit";

export interface IQuestions {}

const initialState: any = { data: [] };

export const questionsSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    addDataPlayer: (state, action) => {
      state.data = state.data.push(action.payload);
    },
  },
});

export const { addDataPlayer } = questionsSlice.actions;

export default questionsSlice.reducer;
