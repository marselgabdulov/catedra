import React from 'react';

class SocialLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.url,
      imageName: this.props.imageName,
      alt: this.props.alt
    }
  }

  render() {
    return (
      <a href={this.state.url} target='blank'><img className='icons' src={require('../../images/icons/' + this.state.imageName)} alt={this.state.alt} /></a>
    )
  }
}

export default SocialLink;
