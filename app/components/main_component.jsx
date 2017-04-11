import React from 'react';
import Nav from 'Nav';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="container">
        <div id="nav-container">
          <Nav/>
        </div>

        <h2>Hello World</h2>
        
        <div id="content-container">
          {this.props.children}
        </div>
      
      </div>
    );
  }

}