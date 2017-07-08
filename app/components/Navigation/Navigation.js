import React from 'react';

import MenuButton from './MenuButton';
import Header from './Header';
import Sidebar from './Sidebar';

class Navigation extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      status: 'active'
    }

    this.handler = this.handler.bind(this);
  }

  handler() {
    let status = this.state.status === 'hidden' ? 'active' : 'hidden';
    console.log('nav state:' + status);
    this.setState({
      status: status
    });
  }

  render() {
    return (
      <div>
        <div className='header'>
          <MenuButton status={this.state.status} action={this.handler} />
          <Header />
        </div>
        <Sidebar status={this.state.status} />
      </div>

    )
  }
}

export default Navigation;
