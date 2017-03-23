let React = require('react');
let ReactDOM = require('react-dom');
let {Route, Router, IndexRouter, hashHistory} = require('react-router');
let Main = require('Main');
let About = require('About');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRouter component={About}/>
    </Route>
  </Router>,
  document.getElementById('app');
);