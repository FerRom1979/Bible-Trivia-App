import { getItem } from "../utils/localStorage";

const BASE_URL = process.env.REACT_APP_API_URL;

export const questions = {
  GetQuestions: async function (page: number = 1, size: number = 10) {
    const response = await window.fetch(`${BASE_URL}/questions?page=${page}&size=${size}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${getItem("token")}` || "",
      },
    });

    return await response.json();
  },
};
