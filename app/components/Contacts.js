import React, { Component } from 'react';
import YandexMap from './YandexMap';
import Youtube from './Youtube';
// import Map from '../images/map-croped.jpg';

class Contacts extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render() {
    return (
      <div>
        <div id="contact-page">
          <div className="card-background">
            <div className="card">
              <p>
                123557 Москва <br/>
                улица Малая Грузинская 27/13 <br/>
                понедельник - воскресенье <br/>
                8:00 - 12:45 | 15:30 - 20:00
              </p>
              <a className="button" href="https://www.google.ru/maps/dir//Малая+Грузинская+ул.,+Москва/@55.7671279,37.5701984,17z/data=!3m1!4b1!4m5!3m4!1s0x46b54a2e59970acf:0xcd23fc08cbdceae7!8m2!3d55.767381!4d37.5721748?hl=ru" target="_blank">МАРШРУТ</a>
            </div>
          </div>

          <div id="main-contact">
            <div className="left">

              <p>
                <b>Экскурсии</b><br/>
                Бесплатные экскурсии по кафедральному собору проводятся по предварительной записи по вторникам, средам и пятницам во время, свободное от богослужений. Организацию экскурсий осуществляет фонд <a href="http://deboniarte.org/">Искусство добра</a>.
              </p>

              <p><b>
                Посещение собора посторонними экскурсионными группами также осуществляется только по предварительному согласованию.
              </b></p>

              <p>
                Контакты: <br/>
                с. Наталия Кабишева<br/>
                <a href="tel:+74992524051">+7(499)252-40-51</a><br/>
                <a href="mailto:angelus@deboniarte.org">angelus@deboniarte.org </a>
              </p>

              <p>
                <b>Журналистам</b><br/>
                По вопросам съемок и интервью в соборе обращайтесь
                к о. Кириллу Горбунову <br/>
                <a href="tel:+74957855434">+7(495)785-54-34</a> <br/>
                <a href="mailto:info@cathmos.ru">info@cathmos.ru</a>
              </p>

            </div>

            <div className="right">

              <p>
                <b>Ризница:</b> <a href="tel:+74992523911">+7(499)252-39-11</a><br/>

                <b>Концерты:</b> <a href="tel:+74992524051">+7(499)252-40-51</a><br/>

                <a href="mailto:catedra.moscow@gmail.com">catedra.moscow@gmail.com</a>
              </p>

              <p><b>Ближайшие станции метро:</b> <br/>
                <span className="purple">Баррикадная</span>,<br/>
                <span className="purple">Улица 1905  года</span>,<br/>
                <span className="brown">Краснопресненская</span>,<br/>
                <span className="brown">Белорусская</span>.
              </p>


              <h3>Реквизиты</h3>

              <p>РО – Приход Непорочного Зачатия Пресвятой Девы Марии Римско-Католической Церкви в г. Москве</p>
              <p>ИНН 7703126634 / КПП 770301001 <br/>
              р/с 40703810400060000001 <br/>
              кор/сч. 30101810145250000411 <br/>
              В Филиал «Центральный» Банка ВТБ (публичное акционерное общество) <br/> г. Москва / БИК 044525411
              </p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Contacts;





// <section className='main-content'>
//   <div className='main-part'>
//     <div className='contacts-info'>
//       <p>123557,&nbsp;&nbsp;Москва,&nbsp;&nbsp;улица Малая Грузинская д.27/13</p>
//       <p>Ближайшие станции метро: Баррикадная, &nbsp;&nbsp;Краснопресненская,&nbsp;&nbsp; Улица 1905 года, &nbsp;&nbsp;Белорусская</p>
//       <p>Ризница:&nbsp; &nbsp;&nbsp;&nbsp;<a href='tel:+7-499-252-39-11'></a>+7 499 252-39-11</p>
//       <p>Концерты: <a href='tel:+7-499-252-40-51'></a>+7 499 252-40-51</p>
//       <p>email: <a href='mailto:catedra.moscow@gmail.com'>catedra.moscow@gmail.com</a></p>
//     </div>
//     <div className='yandex-map'>
//       <YandexMap />
//     </div>
//     <div className='youtube'>
//       <Youtube />
//     </div>
//   </div>
// </section>
