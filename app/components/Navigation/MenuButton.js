import React from 'react';

class MenuButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'hidden'
    }
  }

  setIcon() {
    if(this.props.status === 'active') {
      return "cancel"
    }
    return "menu"
  }

  render() {
    console.log("button props: " + this.props.status);
    return <input type="image" className="icons" id="open-close" onClick={this.props.action} src={require('../../images/icons/'+ this.setIcon() + '.svg')} />
  }
}

export default MenuButton;
