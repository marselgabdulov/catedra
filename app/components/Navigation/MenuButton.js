import React from 'react';

class MenuButton extends React.Component {
  constructor(props) {
    super(props);
  }

  setIcon() {
    if(this.props.visible === true) {
      return 'cancel'
    }
    return 'menu'
  }

  render() {
    return <input type='image' className='icons menu-button' onClick={this.props.action} src={require('../../images/icons/'+ this.setIcon() + '-white.svg')} />
  }
}

export default MenuButton;
