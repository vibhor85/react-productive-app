import { CalendarToday } from "@mui/icons-material";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import AddEventForm from "./AddEventForm";

const Sidebar = ({ date, show }) => {
  const schdules = useSelector((state) => state.schedule.schedules);
  const particularDateSchdules = schdules.filter(
    (sc) => sc.date === date.toString()
  );

  return (
    <Box display={show ? "block" : "none"} sx={{ width: "25%" }} p={2}>
      <AddEventForm />
      <List>
        {particularDateSchdules.length > 0 &&
          particularDateSchdules.map((schedule) => (
            <ListItem
              key={schedule.id}
              sx={{
                border: "1px solid rgba(25, 118, 210, 0.5)",
                margin: "10px 0",
                cursor: "pointer",
              }}>
              <ListItemAvatar>
                <CalendarToday color='primary' />
              </ListItemAvatar>
              <ListItemText
                primary={schedule.title}
                secondary={`${schedule.startTime} - ${schedule.endTime}`}
                color='primary'
              />
            </ListItem>
          ))}
        {particularDateSchdules.length === 0 && (
          <Typography variant='h6' sx={{ textAlign: "center" }}>
            No Events Schdeuled
          </Typography>
        )}
      </List>
    </Box>
  );
};

export default Sidebar;
