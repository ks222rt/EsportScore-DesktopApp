import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRouter, hashHistory} from 'react-router';
import Main from 'Main';
import About from 'About';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Main}>
            <Route path="about" component={About} ></Route>
          </Route>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));