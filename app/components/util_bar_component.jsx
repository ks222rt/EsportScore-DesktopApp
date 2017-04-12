import React from 'react';
import {Link} from 'react-router';

export default class UtilBox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id='util-box'>
        <div id='minimize-button'>-</div>
        <div id='close-button'>X</div>
      </div>
    );
  }

}