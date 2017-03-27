import React from 'react';
import Link from 'react-router';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="nav-bar">
        <h3>Nav</h3>
        <Link to='/Start'>Start</Link>
        <Link to='/About'>About</Link>
        <Link to='/CSGO'>CSGO</Link>
        <Link to='/'>X</Link>
      </div>
    );
  }

}