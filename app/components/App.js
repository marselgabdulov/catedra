import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Contacts from './Contacts';
import Schedule from './Schedule';
import PhotoGallery from './PhotoGallery';
import Calendar from './Calendar';
import Sacramentum from './Sacramentum';
import Ministrant from './Ministrant';
import Catechesis from './Catechesis';
import Congregations from './Congregations';

import Parish from './Parish';

import Navigation from './Navigation/Navigation';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <div>
          <Navigation />
          <div className='content'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/contacts' component={Contacts} />
              <Route exact path='/schedule' component={Schedule} />
              <Route exact path='/calendar' component={Calendar} />
              <Route exact path='/photogallery' component={PhotoGallery} />
              <Route exact path='/parish' component={Parish} />
              <Route path='/sacramentum' component={Sacramentum} />
              <Route exact path='/ministrant' component={Ministrant} />
              <Route exact path='/catechesis' component={Catechesis} />
              <Route exact path='/congregations' component={Congregations} />
              <Route render={function () {
                return <p>Not Found</p>
              } } />
          </Switch>
          </div>
          <Footer />
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

module.exports = App;
