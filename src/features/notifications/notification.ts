import { createSlice } from "@reduxjs/toolkit";

export interface INotification {
  msg: string;
  severity: string;
}

const initialState: any = {
  questions: [],
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    getQuestions: (state, action) => {
      const { questions } = action.payload;
      state.questions = questions;
    },
  },
});

export const { getQuestions } = questionsSlice.actions;
