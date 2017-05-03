import React from 'react';
import {Link} from 'react-router';

export default class UtilBox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id='util-box'>
        <a className='button'></a>
        <div className='minimize-button'></div>
        <div className='close-button'></div>
      </div>
    );
  }

}