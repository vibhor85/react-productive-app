import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  schedules: [],
};

const ScheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addSchedule: (state, action) => {
      const schedule = { ...action.payload, id: nanoid() };
      state.schedules.push(schedule);
      console.log(schedule);
    },
    removeSchedule: (state, action) => {},
  },
});

export const { addSchedule, removeSchedule } = ScheduleSlice.actions;

export default ScheduleSlice.reducer;
