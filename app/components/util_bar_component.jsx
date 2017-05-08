import React from 'react';
import {Link} from 'react-router';

export default class UtilBox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='util-box'>
        <a className='button'></a>
        <div className='minimize-button isOpen'></div>
        <div className='close-button isOpen'></div>
      </div>
    );
  }

}