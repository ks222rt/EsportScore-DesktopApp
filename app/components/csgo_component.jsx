import React from 'react';
import CsgoClient from '../utils/csgo_client.js';

export default class CSGO extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false
    }
  }

  componentDidMount() {
    var that = this;
    this.setState({ isLoading: true });

    CsgoClient.get_leagues().then(function(response) {
      that.setState({
        leagues: response,
        isLoading: false
      });
    }, function(errorMessage) {
      that.setState({
        isLoading: false,
        errorMessage: errorMessage.message
      });
    });
  }

  render() {
    var { isLoading, leagues, errorMessage } = this.state;

    function renderLoadingBar() {
      if(isLoading) {
        return <span className="loading-bar">Loading leagues....</span>
      } else if(errorMessage) {
        return <span className="error-message">{errorMessage}</span>
      } else if(leagues) {
        /* Create a new component next time to create li element with each leagues matches */
        return <span>{leagues.length}</span>
      } 
    }
    
    return(
      <div id="csgo-container">
        <h3>CSGO component</h3>
        {renderLoadingBar()}
      </div>
    );
  }
}