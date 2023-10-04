import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  schedules: [
    {
      id: nanoid(),
      date: "",
      time: "",
      title: "",
      discription: "",
      link: "",
    },
  ],
};

const ScheduleSlice = createSlice({
  name: "schedule",
  initialState,
  reducers: {
    addSchedule: () => {},
    removeSchedule: () => {},
  },
});

export const { addSchedule, removeSchedule } = ScheduleSlice.actions;

export default ScheduleSlice.reducer;
