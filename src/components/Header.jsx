import styled from "@emotion/styled";
import {
  AppBar,
  MenuItem,
  MenuList,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";

const StyledMenuItem = styled(MenuItem)({
  color: "white",
  "&:hover": {
    backgroundColor: "blue",
  },
});

const Header = () => {
  const NavItems = [
    { text: "To-do", path: "/todo" },
    { text: "Calender", path: "/calender" },
    { text: "Dashboard", path: "/" },
  ];

  return (
    <AppBar position="static">
      <Toolbar>
        <Stack
          width="100%"
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <Typography
            varient="h1"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <MenuList>
            <Stack direction="row">
              {NavItems.map((item, index) => (
                <StyledMenuItem key={index}>
                  <NavLink
                    to={item.path}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {item.text}
                  </NavLink>
                </StyledMenuItem>
              ))}
            </Stack>
          </MenuList>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
