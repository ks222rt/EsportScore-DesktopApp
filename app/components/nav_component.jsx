/*let React = require('react');
let {Link} = require('react-router');*/
'use strict';
import React from 'react';
import Link from 'react-router';

class Nav extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return
      <div>
        <h3>Nav</h3>
        <Link to='/Start'>Start</Link>
        <Link to='/About'>About</Link>
        <Link to='/CSGO'>CSGO</Link>
        <Link to='/'>X</Link>
      </div>
    ;
  }
}
/*
let Nav = React.createClass({
  render: function(){
    return(
      <div>
        <h3>Nav</h3>
        <Link to='/Start'>Start</Link>
        <Link to='/About'>About</Link>
        <Link to='/CSGO'>CSGO</Link>
        <Link to='/'>X</Link>
      </div>
    );
  }
});

module.exports = Nav;*/
export default Nav;