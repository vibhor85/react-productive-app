import { useState } from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Add } from "@mui/icons-material";

export default function BasicModal({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button
        variant='outlined'
        sx={{ minWidth: "100%" }}
        startIcon={<Add />}
        onClick={() => setOpen(true)}>
        Add Event
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        {children}
      </Modal>
    </div>
  );
}
