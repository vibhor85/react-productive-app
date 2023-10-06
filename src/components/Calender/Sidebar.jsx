import { CalendarToday } from "@mui/icons-material";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import BasicModal from "./Modal";

const Sidebar = ({ date, show }) => {
  const schdules = useSelector((state) => state.schedule.schedules);
  return (
    <Box display={show ? "block" : "none"} sx={{ width: "25%" }} p={2}>
      <BasicModal />
      <List>
        {schdules.map((schedule) => (
          <ListItem
            key={schedule.id}
            sx={{ border: "1px solid rgba(25, 118, 210, 0.5)" }}
          >
            <ListItemAvatar>
              <CalendarToday color="primary" />
            </ListItemAvatar>
            <ListItemText
              primary="Photos"
              secondary="Jan 9, 2014"
              color="primary"
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Sidebar;
