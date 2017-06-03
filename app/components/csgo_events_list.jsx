import React from 'react';

export default class CsgoEvents extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.series);
  }

  render() {
    const series = this.props.series;
    const list_of_series = series.map((serie) => <li>{serie.description}</li>);

    return(
      <ul>{list_of_series}</ul>
    );
  }
}