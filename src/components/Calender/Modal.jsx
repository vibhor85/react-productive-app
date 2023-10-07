import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Add } from "@mui/icons-material";
import { TextField } from "@mui/material";
import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { addSchedule } from "../../slices/SchedulerSlice";

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

const StyledTextField = styled(TextField)({
  width: "100%",
  margin: "10px",
});

export default function BasicModal({ date }) {
  const [open, setOpen] = useState(false);
  const form = useRef();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
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
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant='outlined'
        sx={{ minWidth: "100%" }}
        startIcon={<Add />}
        onClick={() => setOpen(true)}>
        Add Event
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Typography varient='h4'>Add Event</Typography>
          <form onSubmit={addSchedulehandler} ref={form}>
            <StyledTextField type='text' label='Title' />
            <StyledTextField type='text' label='Discription' multiline />
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
          </form>
        </Box>
      </Modal>
    </div>
  );
}
