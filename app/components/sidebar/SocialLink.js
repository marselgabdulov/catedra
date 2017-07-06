import React from 'react';

class SocialLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.image,
      url: this.props.url,
      alt: this.props.alt
    }
  }

  render() {
    return (
      <a href={this.state.url} target="blank"><img className="svg-icon" src={require('../../images/icons/' + this.state.image)} alt={this.state.alt} /></a>
    )
  }
}

export default SocialLink;
