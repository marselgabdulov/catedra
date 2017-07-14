import React from 'react';
import CatechesisImg from '../images/catechesis.jpg';

class Catechesis extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="ordinary-page">
          <img className="img" src={CatechesisImg} alt="Catechesis"/>
          <span className="sign"><i>The Catechism Lesson by Jules-Alexis Meunier</i></span>
          <h1>Катехизация и углубление веры</h1>
          <p>
            <b>Катехизация</b> (от греч. Κατήχησις — поучение, наставление) — изучение основ христианской веры и вероучения церкви человеком, как правило, готовящимся принять Крещение и стать членом Церкви. Словом катехизация также может обозначаться весь процесс изучения основ христианского вероучения.
          </p>
          <h2>Подготовка к Таинствам для детей и молодежи</h2>
          <p>
            <b>Дошкольная группа 4-6</b><br/>
            Воскресенье 13:00, ведет с.
          </p>

          <p>
            <b>Подготовка к первому Причастию (I год)</b><br/>
            Воскресенье 10:30, ведет с. Мария Тыль FMA
          </p>

          <p>
            <b>Подготовка к первому Причастию (II год - младшие)</b><br/>
            Воскресенье 10:30, ведет с. Тереза Шевц FMA
          </p>

          <p>
            <b>Подготовка к первому Причастию (II год - старшие)</b><br/>
            Воскресенье 10:30, ведет с. Маргарита Петрушчак FMA
          </p>

          <p>
            <b>Дети после причастия</b><br/>
            Воскресенье 10:30, ведет с. Виолетта Врубель FMA
          </p>

          <p>
            <b>Группа для подростков (13-15)</b><br/>
            Воскресенье 13:00, ведет с. Виолетта
          </p>

          <p>
            <b>Группа для подростков (16-)</b><br/>
            Воскресенье 10:30, ведет с. Маргарита Петрушчак FMA
          </p>

          <p>
            <b>Катехизацию для молодёжи (18-27)</b><br/>
            Воскресенье, после Мессы в 17.30, ведет о. Матеуш Копанецки SDB (зал св. Иоанна Боско)
          </p>

          <h2>Подготовка к Таинствам для взрослых и углубление веры</h2>
          <b>Расписание групп по подготовке к Крещению (продолжение)</b>
          <p>
            с. Мария Стецка (зал Сердца Иисуса)  <br/>
            Воскресенье 16:00 <br/>
            Среда 19:00
          </p>

          <b>Расписание групп по подготовке к присоединению</b>
          <p>
            с. Маргарита Петрушчак FMA <br/>
            Среда 19:00 <br/>
            Суббота 19:00 <br/>
            Воскресенье 8:30
          </p>

          <b>Школа Библии</b>
          <p>
            Занятия проходят в каждую вторую и четвёртую субботу месяца в 10:00 в зале в цокольном этаже собора.
          </p>

          <a href="https://www.youtube.com/watch?v=5CRfDBT62aA" target="_blank"><h3>Трехминутный катехезис</h3></a>
      </div>
    )
  }
}

export default Catechesis;