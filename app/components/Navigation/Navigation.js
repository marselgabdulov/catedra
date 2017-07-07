import React from 'react';

import OpenButton from './OpenButton';
import Header from './Header';
import Sidebar from './Sidebar';

class Navigation extends React.Component {
  constructor(props) {

    super(props);
    this.state = {
      status: 'hidden'
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
        <div id="pseudo-header">
          <OpenButton status={this.state.status} action={this.handler} />
          <Header />
        </div>
        <Sidebar status={this.state.status} />
      </div>

    )
  }
}

export default Navigation;
