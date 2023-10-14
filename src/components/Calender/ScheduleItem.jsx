import { CalendarToday } from "@mui/icons-material";
import { ListItem, ListItemAvatar, ListItemText } from "@mui/material";

const ScheduleItem = ({ schedule }) => {
  return (
    <ListItem
      key={schedule.id}
      sx={{
        border: "1px solid rgba(25, 118, 210, 0.5)",
        margin: "10px 0",
        cursor: "pointer",
      }}
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
  );
};

export default ScheduleItem;
