import { createSlice } from "@reduxjs/toolkit";

export interface IAuthUser {
  name: string;
  age?: number | null;
  email: string;
  role: string[] | null;
  id: string;
  accountConfirm: boolean;
  tokenConfirm?: string | null;
  lastName?: string;
  token: any;
}

const initialState: any = {
  user: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { token, user } = action.payload;
      const { name, age, email, lastName, role, _id, accountConfirm, tokenConfirm } = user;
      state.user = {
        name,
        token,
        age,
        email,
        lastName,
        role,
        id: _id,
        accountConfirm,
        tokenConfirm,
      };
    },
    logOutUser: (state) => {
      localStorage.removeItem("token");
      state.user = "";
    },
  },
});

export const { loginUser, logOutUser } = authSlice.actions;

export default authSlice.reducer;
