import logo from "../assets/wheat.png";
import "../style/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="logo" width={60} />
        <h1>Покупка сельскохозяйственных культур</h1>
      </div>
      <div className="header__links">
        <b>+7 937 419-32-22</b>
        {/* <p>emailindex@mail.ru</p> */}
      </div>
    </header>
  );
}
