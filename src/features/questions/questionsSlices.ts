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
  total: [],
  configQuestions: [],
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    getQuestions: (state, action) => {
      try {
        const { questions, filters } = action.payload;
        const data = questions ? questions : filters;
        console.log(filters);

        data.map((question: any) => {
          question["answers"] = [
            question.responseOne,
            question.responseTwo,
            question.responseTree,
            question.responseCorrect,
          ].sort(function () {
            return Math.random() - 0.5;
          });
        });
        state.questions = data;
      } catch (error) {
        console.error(error);
      }
    },
    counterAnswersCorrect: (state, action) => {
      state.total = [...state.total, action.payload];
    },
    addConfigQuestions: (state, action) => {
      state.configQuestions = [...state.configQuestions, action.payload];
    },
  },
});

export const { getQuestions, counterAnswersCorrect, addConfigQuestions } = questionsSlice.actions;

export default questionsSlice.reducer;
