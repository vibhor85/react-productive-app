import { Box, Button, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { addSchedule } from "../../slices/SchedulerSlice";

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

const AddEventForm = ({ date, isOpen, onClose }) => {
  const form = useRef();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [link, setLink] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const dispatch = useDispatch();

  const addSchedulehandler = (e) => {
    e.preventDefault();
    if (!title || !desc || !link || !startDate || !endDate) return;
    const schedule = {
      date: date.toString(),
      title: title,
      description: desc,
      link: link,
      startTime: startDate,
      endTime: endDate,
    };
    dispatch(addSchedule(schedule));
    form.current.reset();
    setStartDate("");
    setEndDate("");
    onClose();
  };
  return (
    <Box sx={style}>
      <Typography varient="h4">Add Event</Typography>
      <form onSubmit={addSchedulehandler} ref={form}>
        <StyledTextField
          type="text"
          label="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <StyledTextField
          type="text"
          label="Discription"
          multiline
          onChange={(e) => setDesc(e.target.value)}
        />
        <StyledTextField
          type="text"
          label="link"
          onChange={(e) => setLink(e.target.value)}
        />
        <Typography varient="h4">Start Time</Typography>
        <StyledTextField
          type="time"
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
        />
        <Typography varient="h4">End Time</Typography>
        <StyledTextField
          type="time"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <Button type="submit" variant="outlined" sx={{ margin: "0 10px" }}>
          Add Event
        </Button>
        <Button
          color="error"
          p={2}
          type="button"
          variant="outlined"
          onClick={onClose}
        >
          Cancel
        </Button>
      </form>
    </Box>
  );
};
export default AddEventForm;
