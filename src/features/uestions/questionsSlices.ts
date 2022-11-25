import { createSlice } from "@reduxjs/toolkit";

export interface IQuestions {
  _id: string;
  question: string;
  responseOne: string;
  responseTwo: string;
  responseTree: string;
  responseCorrect: string;
  type: string;
  difficulty: string;
  nameBook: string;
  createdAt: string;
  updatedAt: string;
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

export default questionsSlice.reducer;
