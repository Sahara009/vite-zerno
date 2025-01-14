import "../style/button.css";
import { useState } from "react";

export default function Button() {
  const [isModalOpen, setModalOpen] = useState(false);
  const whatsappNumber = "+7 937 419-32-22";

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(whatsappNumber).then(() => {
      alert("Номер скопирован в буфер обмена!");
    });
  };

  return (
    <>
      <div className="button__container">
        <button className="button" onClick={handleOpenModal}>
          Связаться с менеджером
        </button>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <p>Номер: {whatsappNumber}</p>
            <button onClick={handleCopyNumber}>Скопировать номер</button>
          </div>
        </div>
      )}
    </>
  );
}
