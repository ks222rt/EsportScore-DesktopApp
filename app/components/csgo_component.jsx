import React from 'react';
import CsgoClient from '../utils/csgo_client.js';

export default class CSGO extends React.Component {

  constructor(props) {
    super(props);
    this._csgoClient = new CsgoClient();
  }

  render() {
    return(
      <div id="csgo-container">
        <h3>CSGO component</h3>
        {this._csgoClient.get_leagues()}
      </div>
    );
  }
}