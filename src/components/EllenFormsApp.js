'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS

//require('normalize.css');
//require('../styles/main.css');
require('../../bower_components/bootstrap/dist/css/bootstrap.min.css');
require('../styles/main.scss');
require('../../bower_components/jquery/dist/jquery.min.js');
//require('../../bower_components/react-bootstrap/react-bootstrap.min.js');

var imageURL = require('../images/yeoman.png');

var EllenFormsApp = React.createClass({
  render: function() {
    return (
      <div className='row'>
        <ReactTransitionGroup transitionName="fade">
          <h1>Test</h1>
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = EllenFormsApp;
