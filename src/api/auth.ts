import { getItem } from "../utils/localStorage";

const BASE_URL = process.env.REACT_APP_API_URL;

export const auth = {
  UserLogin: async function (endpoint: string, user: any) {
    const response = await window.fetch(`${BASE_URL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(user),
    });

    return await response.json();
  },
  UserProtected: async function (endpoint: string) {
    const response = await window.fetch(`${BASE_URL}/${endpoint}`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${getItem("token")}` || "",
      },
    });

    return await response.json();
  },
};
