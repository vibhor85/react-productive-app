import { Box, Button, TextField, Typography } from "@mui/material";
import BasicModal from "./Modal";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { useRef, useState } from "react";

const StyledTextField = styled(TextField)({
  width: "100%",
  margin: "10px",
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const AddEventForm = ({}) => {
  const form = useRef();
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const dispatch = useDispatch();

  const addSchedulehandler = (e) => {
    e.preventDefault();
    const schedule = {
      date: date.toString(),
      title: e.target[0].value,
      description: e.target[1].value,
      link: e.target[2].value,
      startTime: startDate,
      endTime: endDate,
    };
    dispatch(addSchedule(schedule));
    form.current.reset();
    setStartDate("");
    setEndDate("");
  };
  return (
    <BasicModal>
      <Box sx={style}>
        <Typography varient='h4'>Add Event</Typography>
        <form onSubmit={addSchedulehandler} ref={form}>
          <StyledTextField type='text' label='Title' />
          <StyledTextField typ e='text' label='Discription' multiline />
          <StyledTextField type='link' label='link' />
          <Typography varient='h4'>Start Time</Typography>
          <StyledTextField
            type='time'
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
          />
          <Typography varient='h4'>End Time</Typography>
          <StyledTextField
            type='time'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <Button type='submit' variant='outlined'>
            Add Event
          </Button>
          <Button color='error' p={2} type='button' variant='outlined'>
            cancel
          </Button>
        </form>
      </Box>
    </BasicModal>
  );
};
export default AddEventForm;
