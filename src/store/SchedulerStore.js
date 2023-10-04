import { configureStore } from "@reduxjs/toolkit";
import SchedulerReducer from "../slices/SchedulerSlice";

export const SchedulerStore = configureStore({
  reducer: SchedulerReducer,
});
