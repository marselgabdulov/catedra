import React from 'react';
import ImageGallery from 'react-image-gallery';

class PhotoGallery extends React.Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    const images = [
      {
        original: 'http://lorempixel.com/1000/600/nature/1/',
        thumbnail: 'http://lorempixel.com/250/150/nature/1/',
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/2/',
        thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://lorempixel.com/1000/600/nature/3/',
        thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
      <div className="ordinary-page">
        <h1>Галерея</h1>
        <ImageGallery
          items={images}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}
        />
      </div>
    );
  }

}

export default PhotoGallery;
