import React from 'react';
import CsgoClient from '../utils/csgo_client.js';

export default class CsgoMatches extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props.leagues);
    
    var leagues = this.props.leagues;
    for(var i = 0; i < leagues.length; i++) {
      CsgoClient.get_matches(leagues[i].id).then(function(response) {
        console.log(response);
      }, function(errorMessage) {
        console.log(errorMessage.message);
      });
    }
  }

  render() {
    return (
      <div>Hello from the new component</div>
    );
  }
}