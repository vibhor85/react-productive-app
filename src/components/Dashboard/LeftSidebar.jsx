import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps";
import PersonIcon from "@mui/icons-material/Person";
import styled from "@emotion/styled";

const StyledListItemText = styled(ListItemText)({
  color: "black",
});

const LeftSidebar = () => {
  return (
    <Box
      sx={{
        width: "25%",
        height: "86.4vh",
        boxShadow: "10px 0px 15px rgba(0,0,0,0.1)",
      }}
      p={2}
    >
      <List>
        <NavLink to="" style={{ textDecoration: "none" }}>
          <ListItemButton>
            <ListItem>
              <ListItemIcon>
                <AppsIcon />
              </ListItemIcon>
              <StyledListItemText primary="Apps" />
            </ListItem>
          </ListItemButton>
        </NavLink>
        <NavLink to="User" style={{ textDecoration: "none" }}>
          <ListItemButton>
            <ListItem>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <StyledListItemText primary="User" />
            </ListItem>
          </ListItemButton>
        </NavLink>
      </List>
    </Box>
  );
};

export default LeftSidebar;
