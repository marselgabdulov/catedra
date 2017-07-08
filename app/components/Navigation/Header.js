import React from 'react';
const NavLink = require('react-router-dom').NavLink;

class Header extends React.Component {
  render() {
    return (
        <header>
            <NavLink exact activeClassName='active' to='/'>
              <img className='header-icon' src={require('../../images/icons/cathedral.png')} alt=""/>
            </NavLink>
        </header>
    )
  }
}


export default Header;
