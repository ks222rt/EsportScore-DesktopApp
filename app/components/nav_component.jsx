import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="side-nav-bar">
        <h3>Nav</h3>
        <Link to='/'>Start</Link>
        <Link to='/About'>About</Link>
        <Link to='/CSGO'>CSGO</Link>
      </div>
    );
  }

}