import React from 'react';
import MinistrantImg from '../images/ministrant/ministrant.jpg';
const NavLink = require('react-router-dom').NavLink;

class Ministrant extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <h1>Министранты</h1>
        <br/>
        <div className="ordinary-page">
          <section className="text-section">

            <div className="image-wrapper">
              <img className="img" src={MinistrantImg} alt="Ministrant"/>
              <span className="sign"><i>Генрих Вильгельм Трюбнер. Министрант. 1852 г.</i></span>
            </div>

            <p className="text-wrapper">
              Министрант (лат. Ministrans, помощник, прислуживающий) - мирянин, помогающий священнику во время Мессы и других богослужений.
            </p>

            <p className="text-wrapper">
              Уже с середины IX века, согласно наставдению папы Льва IV (875 - 855), во время Мессы должны прислуживать мальчики и юноши, проходившие обучение в церковных школах.
            </p>

            <p className="text-wrapper">
              Папа Пий XII в 1947 году допустил к исполнению функций министрантов "мальчиков из всех слоев общества, которые по своему желанию будут прислуживать во время Святой Мессы правильно , старательно и ревностно".
            </p>

            <p className="text-wrapper">
              От каждого, кто приходит служить Христу, помогая на Мессе, требуется <b>точность, аккуратность, внимательность, послушание и смирение.</b>
            </p>

            <p className="text-wrapper">
              II Ватиканский собор в конституции Sacrosanctum Concilium (п. 29) определил служение министранта как одну из литургических функций и рекомендовал, чтобы ее исполняли <b>лица, тщательно к ней подготовленные.</b>
            </p>

            <p className="text-wrapper">
              Министрант должен быть знаком для других, который указывает, что каждое богослужение является делом не только священника, но и делом всего прихода.
            </p>

            <p className="text-wrapper">
              В любом деле важно постоянство. Святая Месса совершается в храме не только в воскресенье, и доброй традицией является присутствие, по крайней мере, <b>одного министранта на каждом богослужении</b>.
            </p>

            <p className="text-wrapper">
              Кто может стать министрантом в нашем приходе? Католик мужчина, начиная с 12 лет, регулярно приступающий к таинствам, учавствующий в жизни Церкви по мере сил.
            </p>

            <p className="text-wrapper"><b>Если ты хочешь стать министрантом - обратись к о.Аркадию по телефону <a href="tel:+79261805786">+7(926)180-57-86</a></b></p>

            <p className="back-forvard-links">
              <NavLink exact activeClassName='active' to='/parish'>
                -- Приход &nbsp; &nbsp;
              </NavLink>

              <NavLink exact activeClassName='active' to='/catechesis'>
                 Катехизация --
              </NavLink>
            </p>
          </section>
        </div>

      </div>
    )
  }
}

export default Ministrant;
