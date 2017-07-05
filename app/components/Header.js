import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      image: this.props.image
    }
  }

  render() {
    let img = require('../images/' + this.state.image);
    const divStyle = {
      backgroundImage: `url(${img})`
    }

    return (
        <header>
          <h1 className='title'>{this.state.title}</h1>
          <img src={require('../images/' + this.state.image)} />

        </header>

    )
  }
}


export default Header;
