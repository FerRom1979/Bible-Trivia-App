export type QuestionsProps = {
  _id: string;
  question: string;
  responseOne: string;
  responseTwo: string;
  responseTree: string;
  responseCorrect: string;
  type: string;
  difficulty: string;
  nameBook: string;
  createdAt: Date;
  updatedAt: Date;
};
export type StyledCardQuestionsProps = {
  isCorrect?: boolean;
};
