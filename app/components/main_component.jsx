let React = require('react');
let Nav = require('Nav');

let Main = React.createClass({
  render: function(){
    return(
      <div>
        <Nav/>
        <h2>Hello World</h2>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Main; 