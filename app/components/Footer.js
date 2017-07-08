import React, { Component } from 'react';
import Archdiocese from '../images/Archdiocese.jpeg';
import DeBoniArte from '../images/de_boni_arte.jpeg';
import Artebene from '../images/artebene.jpeg';
import Liturgia from '../images/liturgia.jpeg';
import NewsVa from '../images/news_va.png';
import PokrovskieVorota from '../images/pokrovskie.png';


class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='main'>
          <a href='http://cathmos.ru/' target='_blank' >
            <img src={Archdiocese} />
          </a>
          <a href='http://deboniarte.org/' target='_blank'>
            <img src={DeBoniArte} />
          </a>
        </div>

        <div className='bottom'>
          <a href='http://mic-minsk.by/breviaryj-new.html' target='_blank'>
            <img src={Liturgia} />
          </a>
          <a href='http://www.dbiblio.org/' target='_blank'>
            <img src={PokrovskieVorota} />
          </a>
          <a href='http://www.news.va/en' target='_blank'>
            <img src={NewsVa} />
          </a>
          <a href='https://artbene.ru/' target='_blank'>
            <img src={Artebene} />
          </a>
        </div>
      </footer>
    )
  }
}

export default Footer;
