import React, { Component } from 'react';
import YouTube from 'react-youtube';

class Youtube extends Component {
  render() {
    const opts = {
      height: '400',
      width: '450',
      playerVars: {
        autoplay: 1
      }
    };

    return (
      <YouTube
        videoId='7nbaiaLmwKE'
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default Youtube;
