import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Features/Users";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
