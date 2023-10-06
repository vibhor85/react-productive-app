import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../slices/TodoSlice";
import SchedulerReducer from "../slices/SchedulerSlice";

export const store = configureStore({
  reducer: { todo: TodoReducer, schedule: SchedulerReducer },
});
