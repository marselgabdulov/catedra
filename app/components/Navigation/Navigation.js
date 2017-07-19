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
    this.handler = this.handler.bind(this);
  }

  handler() {
    let visible = this.state.visible;
    this.setState({
      visible: !visible
    });
  }

  render() {
    return (
      <div>
        <div id='header'>
          <MenuButton visible={this.state.visible} action={this.handler} id="menu-button" />
          <Header />
        </div>
        <Sidebar visible={this.state.visible} />
      </div>

    )
  }
}

export default Navigation;
