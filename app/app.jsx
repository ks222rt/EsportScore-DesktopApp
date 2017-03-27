import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRouter, hashHistory} from 'react-router';
import {Main} from 'Main';
import {About} from 'About';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/about" component={About} />
    </Route>
</Router>
), document.getElementById('app'));