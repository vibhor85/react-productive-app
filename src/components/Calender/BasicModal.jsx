import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Add } from "@mui/icons-material";

export default function BasicModal({ children, openModel, isOpen, onClose }) {
  return (
    <div>
      <Button
        variant="outlined"
        sx={{ minWidth: "100%" }}
        startIcon={<Add />}
        onClick={openModel}
      >
        Add Event
      </Button>
      <Modal
        open={isOpen}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div>{children}</div>
      </Modal>
    </div>
  );
}
