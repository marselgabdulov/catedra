import React from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';

const mapState = {
    controls: ['default']
};

class YandexMap extends React.Component {
  render() {
    return(
      <div>
        <Map onAPIAvailable={function () { console.log('API loaded'); }} width={'450px'} height={'400px'} state={mapState} center={[55.754734, 37.583314]} zoom={12}>
          <Marker lat={55.767175} lon={37.571327} />
        </Map>
      </div>
    )
  }
}

export default YandexMap;
