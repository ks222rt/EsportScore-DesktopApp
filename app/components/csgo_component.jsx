import React from 'react';
import CsgoClient from '../utils/csgo_client.js';

export default class CSGO extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    }
  }

  getLeagues() {
    var that = this;

    CsgoClient.get_leagues().then(function(response) {
      that.setState({
        leagues: response
      })
    }, function(errorMessage) {
      console.error(errorMessage);
    });
  }

  render() {
    /*var leagueList = leagues.map((league) => {
      return <li>{league}</li>
    });*/
    
    return(
      <div id="csgo-container">
        <h3>CSGO component</h3>
        <button onClick={this.getLeagues}>Hello</button>
      </div>
    );
  }
}