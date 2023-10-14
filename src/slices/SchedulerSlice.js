import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  schedules: [
    {
      id: nanoid(),
      date: "Sun Oct 15 2023 00:00:00 GMT+0530 (India Standard Time)",
    },
  ],
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
