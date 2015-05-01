'use strict';

var EllenFormsApp = require('./EllenFormsApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={EllenFormsApp}>
    <Route name="/" handler={EllenFormsApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
