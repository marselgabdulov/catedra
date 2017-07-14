import React from 'react';
import Priest from '../images/priest-blank.jpg'
import Nun from '../images/nun.jpg'

class Clergy extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div id="clergy-page">
        <h1>Служители</h1>

        <ul className="grid">

          <li className="grid-item">
            <img src={Priest} alt="" className="square" />
            <span className="member-title">Митрополит Архиепархии Божией Матери в Москве</span>
            <h4 className="member-name">Архиепископ Павел Пецци </h4>
          </li>

          <li className="grid-item">
            <img src={Priest} alt="" className="square" />
            <span className="member-title">Генеральный викарий</span>
            <h4 className="member-name">о. Кирилл Горбунов</h4>
          </li>

          <li className="grid-item">
            <img src={Priest} alt="" className="square" />
            <span className="member-title">Настоятель Кафедрального Собора</span>
            <h4 className="member-name">о. Владимир Кабак SDB</h4>
          </li>


          <li className="grid-item">
            <img src={Priest} alt="" className="square" />
            <span className="member-title">Администратор Кафедрального Собора</span>
            <h4 className="member-name">о. Генрих Богушевский SDB</h4>
          </li>

          <li className="grid-item">
            <img src={Priest} alt="" className="square" />
            <span className="member-title">Приходской викарий</span>
            <h4 className="member-name">о. Августин Дзендзель SDB</h4>
          </li>

          <li className="grid-item">
            <img src={Priest} alt="" className="square" />
            <span className="member-title">Приходской викарий</span>
            <h4 className="member-name">о. Иван Колесников</h4>
          </li>

          <li className="grid-item">
            <img src={Priest} alt="" className="square" />
            <span className="member-title">Священник</span>
            <h4 className="member-name">о. Андрей Порубчин SDB</h4>
          </li>

          <li className="grid-item">
            <img src={Priest} alt="" className="square" />
            <span className="member-title">Священник</span>
            <h4 className="member-name">о. Кшиштоф Цабала SDB</h4>
          </li>

          <li className="grid-item">
            <img src={Priest} alt="" className="square" />
            <span className="member-title">Священник</span>
            <h4 className="member-name">о. Матеуш Копанецкий SDB</h4>
          </li>

          <li className="grid-item">
            <img src={Priest} alt="" className="square" />
            <span className="member-title">Армяно - Католический приход</span>
            <h4 className="member-name">о. Петрос Есаян</h4>
          </li>

          <li className="grid-item">
            <img src={Priest} alt="" className="square" />
            <span className="member-title">Испанская Община</span>
            <h4 className="member-name">о. Даниэле Солаццо FMVD</h4>
          </li>



          <li className="grid-item">
            <img src={Nun} alt="" className="square" />
            <span className="member-title">Сестра</span>
            <h4 className="member-name">Малгожата Петрушчак FMA</h4>
          </li>

          <li className="grid-item">
            <img src={Nun} alt="" className="square" />
            <span className="member-title">Сестра</span>
            <h4 className="member-name">Тереса Матыя FMA</h4>
          </li>

          <li className="grid-item">
            <img src={Nun} alt="" className="square" />
            <span className="member-title">Сестра</span>
            <h4 className="member-name">Виолетта Врубель FMA</h4>
          </li>

          <li className="grid-item">
            <img src={Nun} alt="" className="square" />
            <span className="member-title">Сестра</span>
            <h4 className="member-name">Мария Тыль FMA</h4>
          </li>

          <li className="grid-item">
            <img src={Nun} alt="" className="square" />
            <span className="member-title">Сестра</span>
            <h4 className="member-name">Тереса Шевц FMA</h4>
          </li>

          <li className="grid-item">
            <img src={Nun} alt="" className="square" />
            <span className="member-title">Сестра</span>
            <h4 className="member-name">Мария Стецка RSCJ</h4>
          </li>

          <li className="grid-item">
            <img src={Nun} alt="" className="square" />
            <span className="member-title">Сестра</span>
            <h4 className="member-name">Дорота FMA</h4>
          </li>

          <li className="grid-item">
            <img src={Nun} alt="" className="square" />
            <span className="member-title">Сестра</span>
            <h4 className="member-name">Габриела FMA</h4>
          </li>
        </ul>
      </div>
    )
  }
}

export default Clergy;
