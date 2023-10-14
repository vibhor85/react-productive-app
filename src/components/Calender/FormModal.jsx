import React, { useState } from "react";
import AddEventForm from "./AddEventForm";
import BasicModal from "./BasicModal";

const FormModal = ({ date }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <BasicModal isOpen={isModalOpen} openModel={openModal} onClose={closeModal}>
      <AddEventForm date={date} isOpen={isModalOpen} onClose={closeModal} />
    </BasicModal>
  );
};

export default FormModal;
