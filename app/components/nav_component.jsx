let React = require('react');
let {Link} = require('react-router');

let Nav = React.createClass({
  render: function(){
    return(
      <div>
        <h3>Nav</h3>
        <Link to='/Start'>Start</Link>
        <Link to='/About'>About</Link>
        <Link to='/CSGO'>CSGO</Link>
        <Link to='/'>X</Link>
      </div>
    );
  }
});

module.exports = Nav;