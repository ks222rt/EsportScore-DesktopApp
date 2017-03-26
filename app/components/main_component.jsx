/*let React = require('react');
let Nav = require('Nav');*/
import React from 'react';
import Nav from 'Nav';

class Main extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return
      <div>
        <Nav/>
        <h2>Hello World</h2>
        {this.props.children}
      </div>
    ;
  }
}
/*
let Main = React.createClass({
  render: function(){
    return(
      <div>
        <Nav/>
        <h2>Hello World</h2>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main; */

export default Main;