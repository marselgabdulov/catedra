import React, { Component } from 'react';
import YandexMap from './YandexMap';
import Youtube from './Youtube';

class Contacts extends Component {
  render() {
    return (
      <div>
      <div className='contacts-wrapper'>
        <div className='contacts-info'>
          <p>123557,&nbsp;&nbsp;Москва,&nbsp;&nbsp;улица Малая Грузинская д.27/13</p>
          <p>Ближайшие станции метро: Баррикадная, &nbsp;&nbsp;Краснопресненская,&nbsp;&nbsp; Улица 1905 года, &nbsp;&nbsp;Белорусская</p>
          <p>Ризница:&nbsp; &nbsp;&nbsp;&nbsp;<a href='tel:+7-499-252-39-11'></a>+7 499 252-39-11</p>
          <p>Концерты: <a href='tel:+7-499-252-40-51'></a>+7 499 252-40-51</p>
          <p>email: <a href='mailto:catedra.moscow@gmail.com'>catedra.moscow@gmail.com</a></p>
        </div>
        <div className='yandex-map'>
          <YandexMap />
        </div>
        <div className='youtube'>
          <Youtube />
        </div>
      </div>
      </div>
    )
  }
}

export default Contacts;
