import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Contacts from './Contacts';
import Schedule from './Schedule';
import Requisites from './Requisites';
import PhotoGallery from './PhotoGallery';
import Calendar from './Calendar';

import Sacramentum from './Sacramentum';


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
              <Route exact path='/requisites' component={Requisites} />
              <Route exact path='/calendar' component={Calendar} />
              <Route exact path='/photogallery' component={PhotoGallery} />
              <Route exact path='/sacramentum' component={Sacramentum} />
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
