import "../style/info-block.css";
import truck from "../assets/truck.gif";
import money from "../assets/money.gif";
import image from "../assets/combine.jpg";

export default function InfoBlock() {
  return (
    <>
      <div className="info">
        <div style={{ padding: "30px 10px" }}>
          <div className="section_1">
            <h3>Уважаемые сельхозпроизводители!</h3>
            <p>
              Организация имеет возможность рассмотреть Ваше предложение на
              рынке сельскохозяйственной продукции.
            </p>
          </div>
          <div className="section_2">
            <h3>Заключаем договора на зерновые урожая 2024 года:</h3>
            <ul>
              <li>- Продовольственное (рожь, пшеница, гречиха, овес)</li>
              <li>- Фуражное (пшеница, ячмень) </li>
              <li>- Ячмень (пивоваренный)</li>
              <li>- Подсолнечник (масличный)</li>
              <li>- Лен</li>
              <li>- Нут</li>
              <li>- Просо</li>
            </ul>
            <p>
              Закупаем зерновые в Центрально-Черноземном регионе, ПФО -
              Франко-хозяйство: самовывоз от 20 тонн
            </p>
          </div>
        </div>
      </div>
      <div className="info__details">
        <div>
          <img src={truck} alt="" />
          <h4>Форма оплаты</h4>
          <p>Любая (наличный так же без НДС)</p>
        </div>
        <div>
          <img src={money} alt="" />
          <h4>Доставка</h4>
          <p>
            Доставку вашей продукции до элеваторов авто и ж/д транспортом
            организуем сами
          </p>
        </div>
      </div>
      <div className="info__image">
        <img src={image} alt="" />
      </div>
    </>
  );
}
