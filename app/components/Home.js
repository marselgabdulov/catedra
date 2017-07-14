import React, { Component } from 'react';
import Sobor from '../images/sobor_draw.jpg';
const NavLink = require('react-router-dom').NavLink;

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <div>
        <div>
          <h1 id='page-header'>
            Собор Непорочного Зачатия<br/> Пресвятой Девы Марии
          </h1>
          <br/>

        </div>
      <section id='home-page'>

        <div className='left'>
          <img src={Sobor} alt="Sobor" className='sobor-img'/>
        </div>
        <div className='right'>

          <p>
            Крупнейший католический собор в России, кафедральный собор архиепархии Матери Божией, возглавляемой архиепископом митрополитом Паоло Пецци. Третий по счёту московский католический храм, построенный до революции 1917 года, один из трёх действующих в настоящее время католических храмов Москвы наряду с храмом святого Людовика и храмом святой Ольги.

            Расположен по адресу: Малая Грузинская улица, дом 27/13. Ближайшие станции метро — Краснопресненская, Улица 1905 года и Белорусская-кольцевая.

            В соборе служат мессы на русском, польском, корейском, английском, французском, испанском языках, латыни, а также тридентские мессы и мессы по армянскому обряду. Кроме того, проводятся встречи молодёжи, курсы катехизации, благотворительные концерты органной, церковной и классической музыки. При соборе есть библиотека и церковная лавка, офис регионального отделения «Каритас» и благотворительный фонд «Искусство добра».
          </p>
          <p>
            <NavLink exact activeClassName='active' to='/contacts'>
               Контакты
            </NavLink>
          </p>
        </div>

      </section>
        </div>
    )
  }
}

export default Home;
