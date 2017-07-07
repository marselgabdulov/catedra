import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Contacts from './Contacts';
import Schedule from './Schedule';
import Requisites from './Requisites';

import Navigation from './Navigation/Navigation';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">



        <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/contacts' component={Contacts} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path='/requisites' component={Requisites} />
            <Route render={function () {
              return <p>Not Found</p>
            } } />
          </Switch>
          {/* <Footer /> */}
        </div>
        </BrowserRouter>
      </div>
    )
  }
}

module.exports = App;
