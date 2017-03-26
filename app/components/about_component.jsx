/*let React = require('react');*/
'use strict';
import React from 'react';

class About extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return
      <div>
        <h3>About component</h3>
      </div>
    ;
  }
}

/*let About = React.createClass({
  render: function(){
    return(
      <div>
        <h3>About component</h3>
      </div>
    );
  }
});

module.exports = About;*/
export default About;