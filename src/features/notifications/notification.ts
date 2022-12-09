import { createSlice } from "@reduxjs/toolkit";

export interface INotification {
  msg: string;
  severity: string;
}

const initialState: any = {
  notification: [],
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    getNotifications: (state, action) => {
      const { notifications } = action.payload;
      state.notifications = notifications;
    },
  },
});

export const { getNotifications } = notificationsSlice.actions;
