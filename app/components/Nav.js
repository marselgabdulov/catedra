import React from 'react';
const NavLink = require('react-router-dom').NavLink;

class Nav extends React.Component {
  render() {
    return(
      <div>
        <ul>
          <li><NavLink exact activeClassName='active' to='/'>
            Главная
          </NavLink></li>
          <li>
            <NavLink exact activeClassName='active' to='/contacts'>
              Контакты
            </NavLink>
          </li>
          <li>
          <NavLink exact activeClassName='active' to='/requisites'>
            Реквизиты
          </NavLink>
          </li>
          <li>
          <NavLink exact activeClassName='active' to='/schedule'>
            Расписание богослужений
          </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Nav;
