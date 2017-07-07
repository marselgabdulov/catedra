import React from 'react';
import OpenButton from './OpenButton';
const NavLink = require('react-router-dom').NavLink;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    // bind the this context to the handler function
    this.handler = this.handler.bind(this);
    // Set state
    this.state = {
      status : 'hidden'
    }
  }

  handler() {
    let st = this.state.status === 'hidden' ? 'active' : 'hidden';
    console.log('sidebar state:' + st);
    this.setState({
      status: st
    });
  }

  closeSidebar() {
    this.setState({
      status: 'hidden'
    })
  }

  render() {
    return (
      <div id="navbar">
        <nav role='navigation' className={this.state.status}>
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
          <OpenButton action={this.handler} />
        </nav>
      </div>
     )
  }
}

export default Sidebar;
