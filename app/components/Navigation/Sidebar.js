import React from 'react';
const NavLink = require('react-router-dom').NavLink;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status : 'hidden'
    }
  }

  closeSidebar() {
    this.setState({
      status: 'hidden'
    })
  }

  render() {
    return (
      <div>
      <div id="navbar">
        <nav role='navigation' className={this.props.status}>
          <ul>
            <li>
              <NavLink onClick={this.closeSidebar} exact activeClassName='active' to='/'>
                Главная
              </NavLink>
            </li>
            <li>
              <NavLink onClick={this.closeSidebar} exact activeClassName='active' to='/contacts'>
                 Контакты
              </NavLink>
            </li>
            <li>
              <NavLink onClick={this.closeSidebar} exact activeClassName='active' to='/requisites'>
                Реквизиты
              </NavLink>
            </li>
            <li>
              <NavLink onClick={this.closeSidebar} exact activeClassName='active' to='/schedule'>
                Расписание богослужений
              </NavLink>
            </li>
          </ul>

        </nav>
      </div>
      </div>
     )
  }
}

export default Sidebar;
