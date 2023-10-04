import Calendar from "react-calendar";
import { useState } from "react";
import "./Calender.css";
import "react-calendar/dist/Calendar.css";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";

const Calender = () => {
  const [value, setValue] = useState(new Date());
  const [show, setShow] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <Calendar
        value={value}
        onChange={setValue}
        onClickDay={() => setShow(true)}
      />
      <Sidebar date={value} show={show} />
    </Box>
  );
};

export default Calender;
