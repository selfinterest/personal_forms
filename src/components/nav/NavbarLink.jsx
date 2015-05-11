/** @jsx React.DOM */
var React = require('react');
var NavbarLink = React.createClass({
  render: function() {
    return (
      <a href={this.props.url}>{this.props.text}</a>
    );
  }
});

module.exports = NavbarLink;