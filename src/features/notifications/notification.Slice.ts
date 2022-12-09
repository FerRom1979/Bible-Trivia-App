import { createSlice } from "@reduxjs/toolkit";

export interface INotification {
  msg: string;
  severity: string;
}

const initialState: any = [];

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    getQuestions: (state, action) => {
      const { questions } = action.payload;
      console.log(questions);

      state.push(questions);
    },
  },
});

export const { getQuestions } = questionsSlice.actions;
