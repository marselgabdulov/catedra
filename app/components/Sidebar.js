import React from 'react';
import Nav from './nav';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status : 'hidden'
    }
  }

  handleClick() {
    let st = this.state.status === 'hidden' ?  'active' : 'hidden';
    this.setState( {
      status: st
    });
  }

   render() {
     return (
       <div id="navbar">
         <nav role='navigation' onClick={this.handleClick.bind(this)} className={this.state.status}>
           <Nav/>
            <button className="menu"></button>
          </nav>
       </div>
     )
  }
}

export default Sidebar;
