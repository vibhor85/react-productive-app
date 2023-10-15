import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  schedules: [
    {
      id: nanoid(),
      date: "Sun Oct 15 2023 00:00:00 GMT+0530 (India Standard Time)",
      title: "Stand-Up Meeting",
      description:
        "orem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet venenatis sapien. Pellentesque sodales augue eu elit porttitor, vel aliquet nulla mattis. Nullam dolor felis, suscipit et aliquam non, dictum sed massa. Fusce at felis quis ex accumsan sagittis. Praesent imperdiet molestie felis ut finibus. Mauris fermentum enim consequat odio vestibulum commodo. Sed hendrerit enim laoreet lorem dignissim blandit. Praesent vestibulum auctor mollis. Sed viverra arcu vel turpis iaculis",
      startTime: "12:34",
      endTime: "02:34",
      link: "https://meet.google.com/moo-rfdc-mhx",
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
