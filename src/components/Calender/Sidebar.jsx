import { CalendarToday } from "@mui/icons-material";
import { Box, List, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import ModalPass from "./FormModal";
import ScheduleItem from "./ScheduleItem";

const Sidebar = ({ date, show }) => {
  const schdules = useSelector((state) => state.schedule.schedules);
  const particularDateSchdules = schdules.filter(
    (sc) => sc.date === date.toString()
  );

  return (
    <Box display={show ? "block" : "none"} sx={{ width: "25%" }} p={2}>
      <ModalPass date={date} />
      <List>
        {particularDateSchdules.length > 0 &&
          particularDateSchdules.map((schedule) => (
            <ScheduleItem schedule={schedule} key={schedule.id} />
          ))}
        {particularDateSchdules.length === 0 && (
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            No Events Schdeuled
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default Sidebar;
