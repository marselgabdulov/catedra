import React from 'react';
const NavLink = require('react-router-dom').NavLink;
import ParishImg from '../images/parish-1.jpg';

class Parish extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div className="ordinary-page">
        <img src={ParishImg} alt="Parish"/>
        <h1>Приход</h1>
        <p>
          <NavLink onClick={this.closeSidebar} exact activeClassName='active' to='/sacramentum'>ТАИНСТВА</NavLink> - семь таинств касаются всех этапов, всех важных моментов жизни христианина: они дают рождение и возрастание, исцеление и миссию христианской жизни в вере...
        </p>

        <p>
          ГРАНИЦЫ ПРИХОДА - Нашему приходу принадлежат католики, проживающие в пределах прихода Непорочного Зачатия Пресвятой Девы Марии и прихода Святого Семейства. Подробнее...
        </p>

        <p>СЛУЖИТЕЛИ</p>

        <p><NavLink onClick={this.closeSidebar} exact activeClassName='active' to='/catechesis'>КАТЕХИЗАЦИЯ И УГЛУБЛЕНИЕ ВЕРЫ.</NavLink> Катехизация (от греч. Κατήχησις — поучение, наставление) — изучение основ христианской веры и вероучения церкви человеком, как правило, готовящимся принять Крещение и стать членом Церкви... </p>

        <p>
          <NavLink onClick={this.closeSidebar} exact activeClassName='active' to='/ministrant'>МИНИСТРАНТ</NavLink> - (лат. Ministrans, помощник, прислуживающий) - мирянин, помогающий священнику во время Мессы и других богослужений...
        </p>

        <p><NavLink onClick={this.closeSidebar} exact activeClassName='active' to='/congregations'>ОРДЕНА И КОНГРЕГАЦИИ...</NavLink></p>

        <p><NavLink onClick={this.closeSidebar} exact activeClassName='active' to='/prayergroups'>МОЛИТВЕННЫЕ ГРУППЫ...</NavLink></p>

        <p><NavLink onClick={this.closeSidebar} exact activeClassName='active' to='/organisations'>ДВИЖЕНИЯ...</NavLink></p>

        <h3>Дорогие братья и сестры! </h3>
        <p>
          Приходу всегда нужна ваша помощь и поддержка.
          Если у вас есть  предложения, пожалуйста, обращайтесь в ризницу или напишите письмо на <a href="mailto:catedra.moscow@gmail.com">catedra.moscow@gmail.com</a>.
        </p>
      </div>
    )
  }
}

export default Parish;
