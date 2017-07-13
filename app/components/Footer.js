import React, { Component } from 'react';
const NavLink = require('react-router-dom').NavLink;

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='contact-info'>
          <p>
            catedra.moscow@gmail.com<br/>
            +7 499 252-39-11 <br/>
            +7 499 252-40-51
          </p>
        </div>

        <div className='address'>
          <NavLink onClick={this.closeSidebar} exact activeClassName='active' to='/contacts'>
            контакты
          </NavLink>
          <div className="literal">
          Малая Грузинская д.27/13<br/>
          123557 Москва</div>
          <br/>

        </div>

        <div className="partners">
          <a href='http://deboniarte.org/' target='_blank'>
            Искусство добра
          </a><br/>
          <a href='http://mic-minsk.by/breviaryj-new.html' target='_blank'>
            Литургия часов
          </a><br/>
          <a href='http://cathmos.ru/' target='_blank' >
            Архиепархия
          </a>
        </div>

        <div className="partners-2">
          <a href='http://www.dbiblio.org/' target='_blank'>
            покровские ворота
          </a><br/>
          <a href='http://www.news.va/en' target='_blank'>
            новости ватикана
          </a><br/>
          <a href='https://artbene.ru/' target='_blank'>
            концерты
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer;
