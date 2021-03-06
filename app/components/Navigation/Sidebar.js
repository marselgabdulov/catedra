import React from 'react';
const NavLink = require('react-router-dom').NavLink;
import SocialLink from './SocialLink';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible : false,
      toggleSidebar : this.props.toggleSidebar
    }
  }

  render() {
    return (
      <div id='sidebar' >
        <nav role='navigation' className={this.props.visible === true ? "active" : "hidden"} onClick={this.state.toggleSidebar} >
          <div className="menu-block">
            <ul>
              <li>
                <NavLink onClick={this.state.toggleSidebar} exact activeClassName='active' to='/contacts'>
                   Контакты
                </NavLink>
              </li>
              <li>
                <NavLink onClick={this.state.toggleSidebar} exact activeClassName='active' to='/calendar'>
                  Календарь событий
                </NavLink>
              </li>

              <li>
                <NavLink onClick={this.state.toggleSidebar} exact activeClassName='active' to='/schedule'>
                  Расписание богослужений
                </NavLink>
              </li>

              <li>
                <NavLink onClick={this.state.toggleSidebar} exact activeClassName='active' to='/rules'>
                  Правила поведения
                </NavLink>
              </li>

              <li>
                <NavLink onClick={this.state.toggleSidebar} exact activeClassName='active' to='/parish'>
                  Приход
                </NavLink>
              </li>

              <li>
                <NavLink onClick={this.state.toggleSidebar} exact activeClassName='active' to='/clergy'>
                  Служители
                </NavLink>
              </li>


              <li>
                <NavLink onClick={this.state.toggleSidebar} exact activeClassName='active' to='/enlightenment'>
                  Культура и образование
                </NavLink>
              </li>

              <li>
                <NavLink onClick={this.state.toggleSidebar} exact activeClassName='active' to='/photogallery'>
                  Галерея
                </NavLink>
              </li>

            </ul>
            <div className='social-links'>
              <SocialLink url='https://www.facebook.com/catedra.ru' imageName='facebook-logo-round-red.svg' alt='Facebook' />

              <SocialLink url='https://vk.com/catedra' imageName='vk-social-red.svg' alt='VK' />

              <SocialLink url='https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B1%D0%BE%D1%80_%D0%9D%D0%B5%D0%BF%D0%BE%D1%80%D0%BE%D1%87%D0%BD%D0%BE%D0%B3%D0%BE_%D0%97%D0%B0%D1%87%D0%B0%D1%82%D0%B8%D1%8F_%D0%9F%D1%80%D0%B5%D1%81%D0%B2%D1%8F%D1%82%D0%BE%D0%B9_%D0%94%D0%B5%D0%B2%D1%8B_%D0%9C%D0%B0%D1%80%D0%B8%D0%B8_(%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0)' imageName='wikipedia-logo-red.svg' alt='Wiki' />
            </div>
          </div>

        </nav>
      </div>
     )
  }
}

export default Sidebar;
