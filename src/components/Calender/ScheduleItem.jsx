import { CalendarToday } from "@mui/icons-material";
import {
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Modal,
} from "@mui/material";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  background: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const ScheduleItem = ({ schedule }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Box>
      <ListItem
        key={schedule.id}
        sx={{
          border: "1px solid rgba(25, 118, 210, 0.5)",
          margin: "10px 0",
          cursor: "pointer",
        }}
        onClick={() => setIsModalOpen(true)}
      >
        <ListItemAvatar>
          <CalendarToday color="primary" />
        </ListItemAvatar>
        <ListItemText
          primary={schedule.title}
          secondary={`${schedule.startTime} - ${schedule.endTime}`}
          color="primary"
        />
      </ListItem>
      <Box>
        <Modal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>Content</Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default ScheduleItem;
