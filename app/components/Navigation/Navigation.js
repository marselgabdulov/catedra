import React from 'react';

import MenuButton from './MenuButton';
import Header from './Header';
import Sidebar from './Sidebar';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false
    }
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar() {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    return (
      <div>
        <div id='header'>
          <MenuButton visible={this.state.visible} action={this.toggleSidebar} id="menu-button" />
          <Header />
        </div>
        <Sidebar toggleSidebar={this.toggleSidebar} visible={this.state.visible} />
      </div>

    )
  }
}

export default Navigation;
