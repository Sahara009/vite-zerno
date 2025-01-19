import Button from "./Button";
import "../style/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        <p className="text">
          Закупаем пшеницу в Пензенской области, Саратовской области, Республики
          Мордовии, Нижегородской и Ульяновской областях.
        </p>
        <p className="footer__detail">© 2025 Название сайта</p>
      </div>
      <div>
        <Button />
      </div>
    </footer>
  );
}
