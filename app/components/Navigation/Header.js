import React from 'react';
const NavLink = require('react-router-dom').NavLink;

class Header extends React.Component {
  render() {
    return (
        <header>
            <NavLink exact activeClassName='active' to='/'>
              <span className="home-link"><h2>Храм</h2></span>
            </NavLink>
        </header>
    )
  }
}


export default Header;
