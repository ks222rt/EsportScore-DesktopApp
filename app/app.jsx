/*let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRouter, hashHistory} = require('react-router');
let Main = require('Main');
let About = require('About');*/
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRouter, hashHistory} from 'react-router';
import Main from 'Main';
import About from 'About';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="/about" component={About} />
    </Route>
</Router>
), document.getElementById('app'));