import React from 'react';
const NavLink = require('react-router-dom').NavLink;
import ParishImg from '../images/parish-1.jpg';

class Parish extends React.Component {
  render() {
    return (
      <div className="ordinary-page">
        <img src={ParishImg} alt="Parish"/>
        <h1>Приход</h1>
        <p>
          ТАИНСТВА - семь таинств касаются всех этапов, всех важных моментов жизни христианина: они дают рождение и возрастание, исцеление и миссию христианской жизни в вере. <NavLink onClick={this.closeSidebar} exact activeClassName='active' to='/sacramentum'>Подробнее...</NavLink>
        </p>

        <p>
          ГРАНИЦЫ ПРИХОДА - Нашему приходу принадлежат католики, проживающие в пределах прихода Непорочного Зачатия Пресвятой Девы Марии и прихода Святого Семейства. Подробнее...
        </p>

        <p>СЛУЖИТЕЛИ</p>

        <p>КАТЕХИЗАЦИЯ И УГЛУБЛЕНИЕ ВЕРЫ. Катехизация (от греч. Κατήχησις — поучение, наставление) — изучение основ христианской веры и вероучения церкви человеком, как правило, готовящимся принять Крещение и стать членом Церкви. Подробнее...</p>

        <p>
          МИНИСТРАНТ - (лат. Ministrans, помощник, прислуживающий) - мирянин, помогающий священнику во время Мессы и других богослужений. <NavLink onClick={this.closeSidebar} exact activeClassName='active' to='/ministrant'>Подробнее...</NavLink>
        </p>

        <p>ОРДЕНА И КОНГРЕГАЦИИ...</p>

        <p>МОЛИТВЕННЫЕ ГРУПП...</p>

        <p>ДВИЖЕНИЯ...</p>

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
