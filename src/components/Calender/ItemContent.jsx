import { Box, Stack } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ItemContent = ({ schedule }) => {
  return (
    <Box width={1}>
      <Typography variant="h6" textAlign="center">
        {schedule.title}
      </Typography>
      <Box sx={{ display: "block" }}>
        <Typography variant="h6">Description:</Typography>
        <Typography variant="p">{schedule.description}</Typography>
      </Box>
      <Stack direction="row" alignItems="center">
        <Typography variant="h6">Start Time:</Typography>
        <Typography variant="p" sx={{ margin: "0 30px" }}>
          {schedule.startTime}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center">
        <Typography variant="h6">End Time:</Typography>
        <Typography variant="p" sx={{ margin: "0 30px" }}>
          {schedule.endTime}
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center">
        <Typography variant="h6">Meeting Link:</Typography>
        <Link to={schedule.link} target="_blank">
          {schedule.link}
        </Link>
      </Stack>
    </Box>
  );
};

export default ItemContent;
