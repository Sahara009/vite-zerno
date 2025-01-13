import logo from "../assets/wheat.png";
import "../style/header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" width={60} />
        <h1>Название сайта</h1>
      </div>
      <div className="header__links">
        <b>+790 123-45-67</b>
        <p>emailindex@mail.ru</p>
      </div>
    </div>
  );
}
