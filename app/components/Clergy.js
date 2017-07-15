import React from 'react';
import ClericCart from './ClericCart';

import Priest from '../images/priest-blank.jpg';
import Nun from '../images/nun.jpg';


  class Clergy extends React.Component {
    componentDidMount() {
      window.scrollTo(0,0);
    }

  render() {
    const clergy = [
      {
        name: "Архиепископ Павел Пецци",
        position: "Митрополит Архиепархии Божией Матери в Москве",
        image: Priest
      },

      {
        name: "о.Кирилл Горбунов",
        position: "Генеральный викарий",
        image: Priest
      },

      {
        name: "о.Владимир Кабак SDB",
        position: "Настоятель Кафедрального Собора",
        image: Priest
      },

      {
        name: "о.Генрих Богушевский SDB",
        position: "Администратор Кафедрального Собора",
        image: Priest
      },

      {
        name: "о.Августин Дзендзель SDB",
        position: "Приходской викарий",
        image: Priest
      },

      {
        name: "о.Иван Колесников",
        position: "Приходской викарий",
        image: Priest
      },

      {
        name: "о.Андрей Порубчин SDB",
        position: "Священник",
        image: Priest
      },

      {
        name: "о.Кшиштоф Цабала SDB",
        position: "Священник",
        image: Priest
      },

      {
        name: "о.Матеуш Копанецкий SDB",
        position: "Священник",
        image: Priest
      },

      {
        name: "о.Петрос Есаян",
        position: "Армяно-Католический приход",
        image: Priest
      },

      {
        name: "о.Даниэле Солаццо FMVD",
        position: "Испанская Община",
        image: Priest
      },


      {
        name: "Малгожата Петрушчак FMA",
        position: "Сестра",
        image: Nun
      },

      {
        name: "Тереса Матыя FMA",
        position: "Сестра",
        image: Nun
      },

      {
        name: "Виолетта Врубель FMA",
        position: "Сестра",
        image: Nun
      },

      {
        name: "Мария Тыль FMA",
        position: "Сестра",
        image: Nun
      },

      {
        name: "Тереса Шевц FMA",
        position: "Сестра",
        image: Nun
      },

      {
        name: "Мария Стецка RSCJ",
        position: "Сестра",
        image: Nun
      },

      {
        name: "Дорота FMA",
        position: "Сестра",
        image: Nun
      },

      {
        name: "Габриела FMA",
        position: "Сестра",
        image: Nun
      },
    ];

    const clericCarts = clergy.map((cart) =>
      <li className="cleric-cart" key={cart.name}>
        <img src={cart.image} alt={cart.name} className="square" />
        <span className="position">{cart.position}</span>
        <h4 className="name">{cart.name}</h4>
      </li>
    );

    return (
      <div id="clergy-page">
        <h1>Служители</h1>
        <ul className="grid">
          {clericCarts}
        </ul>
      </div>
    )
  }
}

export default Clergy;
