import { Box, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const LeftSidebar = () => {
  return (
    <Box
      sx={{ width: "25%", borderRight: "1px solid #1976d2", height: "86.4vh" }}
      p={2}
    >
      <List>
        <ListItem>
          <NavLink to="">
            <ListItemText primary="Apps" />
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="User">
            <ListItemText primary="User" />
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );
};

export default LeftSidebar;
