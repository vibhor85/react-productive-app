import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const style = {
  width: "100%",
};

const StyledLink = styled(Link)({
  display: "block",
  maxWidth: 345,
  width: "100%",
  textDecoration: "none",
  margin: "0 20px",
});

const Apps = () => {
  return (
    <Stack direction="row" sx={style}>
      <StyledLink to="/todo">
        <Card sx={{ width: "100%" }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png"
            title="Todo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Todo
            </Typography>
          </CardContent>
        </Card>
      </StyledLink>
      <StyledLink to="/calender">
        <Card sx={{ width: "100%" }}>
          <CardMedia
            sx={{ height: 200 }}
            image="https://media.coschedule.com/uploads/2021/08/Blog_How-To-Create-An-Content-Marketing-Editorial-Calendar-In-2023_Header-copy.png"
            title="Calendar"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Calendar
            </Typography>
          </CardContent>
        </Card>
      </StyledLink>
    </Stack>
  );
};

export default Apps;
