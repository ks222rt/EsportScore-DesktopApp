import React from 'react';
import Nav from 'Nav';
import UtilBox from 'UtilBox';

export default class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="container">

        {/* Containter for navigation bar */}
        <Nav/>
        
        {/* Container for all content displayed */}
        <div className='content isOpen' >

          {/* Container for app header and 
            container for minimize/exit buttons */}
          <div>
            <UtilBox/>
          </div>

          {/* Container for all content */}
          {this.props.children}

        </div>
      </div>
    );
  }

}