import React from 'react';
import CsgoClient from '../utils/csgo_client.js';
import CsgoEvents from 'CsgoEvents';

export default class CSGO extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      leagues: undefined,
      tournaments: undefined,
      series: undefined
    }
  }

  componentDidMount() {
    var that = this;
    this.setState({ isLoading: true });

    CsgoClient.get_series().then(function(response) {
      that.setState({
        series: response,
        isLoading: false
      });

    }, function(errorMessage) {
      that.setState({
        isLoading: false,
        errorMessage: errorMessage.message
      });
    });

    /*CsgoClient.get_tournaments().then(function(response) {
        that.setState({
          tournaments: response,
        });

      }, function(errorMessage) {
        that.setState({
          isLoading: false,
          errorMessage
        });
    });*/
    
    
  }

  render() {
    var { isLoading, series, errorMessage } = this.state;

    function renderLoadingBar() {
      if(isLoading) {
        return <span className="loading-bar">Loading leagues....</span>
      } else if(errorMessage) {
        return <span className="error-message">{errorMessage}</span>
      } else if(series) {
        /* Create a new component next time to create li element with each leagues matches */
        return <CsgoEvents series={series}/>
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