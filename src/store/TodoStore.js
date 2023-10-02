import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../slices/TodoSlice";

export const TodoStore = configureStore({
  reducer: TodoReducer,
});
