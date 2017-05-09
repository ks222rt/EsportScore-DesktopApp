import React from 'react';
import {Link} from 'react-router';

export default class Nav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='sidebar'>
        <div className='title'>
          Esport Score
        </div>
        <ul className="nav">
          <li><Link to='/' className='active'>Start</Link></li>
          <li><Link to='/About'>About</Link></li>
          <li><Link to='/CSGO'>CSGO</Link></li>
        </ul>
      </div>
    );
  }

}