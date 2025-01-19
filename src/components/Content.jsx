import "../style/content.css";
// import photo from "../assets/tractor.jpg";
import Button from "./Button";

export default function Content() {
  return (
    <>
      <div className="content">
        <img
          src="https://statistica.gov.md/files/files/cover_images/q22528-15818.jpg"
          alt="photo"
        />
        <h2>
          Производство, переработка и реализация сельскохозяйственных продукции
        </h2>
      </div>
      <div className="title">
        <h1>Закупка сельхозпродукции за наличный расчет и Без НДС</h1>
      </div>
      <Button />
    </>
  );
}
