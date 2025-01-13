import "../style/button.css";

export default function Button() {
  const handleWhatsAppRedirect = () => {
    const whatsappNumber = "89623593918"; // Замените на ваш номер WhatsApp
    const message = "Привет! У меня есть вопрос."; // Сообщение по умолчанию
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    );
  };

  return (
    <>
      <div className="button__container">
        <button className="button" onClick={handleWhatsAppRedirect}>
          Написать в WhatsApp
        </button>
      </div>
    </>
  );
}
