'use strict';

var EllenFormsApp = require('./EllenFormsApp');
var React = require('react');

var Router = require('react-router')
  , RouteHandler = Router.RouteHandler
  , Route = Router.Route;

var ReactBootstrap = require('react-bootstrap')
  , Nav = ReactBootstrap.Nav
  , Navbar = ReactBootstrap.Navbar
  , NavItem = ReactBootstrap.NavItem
  , DropdownButton = ReactBootstrap.DropdownButton
  , MenuItem = ReactBootstrap.MenuItem
  , ListGroup = ReactBootstrap.ListGroup;

var ReactRouterBootstrap = require('react-router-bootstrap')
  , NavItemLink = ReactRouterBootstrap.NavItemLink
  , ButtonLink = ReactRouterBootstrap.ButtonLink
  , MenuItemLink = ReactRouterBootstrap.MenuItemLink
  , ListGroupItemLink = ReactRouterBootstrap.ListGroupItemLink;

require('../../bower_components/bootstrap/dist/css/bootstrap.min.css');
require('../styles/main.scss');
require('../../bower_components/jquery/dist/jquery.min.js');

var App = React.createClass({
  render: function() {
  	return (
  		<div>
			<Navbar>
				<Nav>
					<DropdownButton eventKey={1} title="Forms">
						<MenuItemLink to="strategicPlan">Strategic Plan</MenuItemLink>
					</DropdownButton>
				</Nav>
			</Navbar>
			<div className="container">
	        	<RouteHandler />
        	</div>
		</div>
	);

    /*return (
      <div>
        NavItemLink<br />
        <Nav>
          <NavItemLink
            to="destination"
            params={{ someparam: 'hello' }}>
            Linky!
          </NavItemLink>
        </Nav>
        <br />
        ButtonLink<br />
        <ButtonLink
          to="destination"
          params={{ someparam: 'hello' }}>
          Linky!
        </ButtonLink>
        <br />
        <ListGroup>
          <ListGroupItemLink
            to="destination"
            params={{ someparam: 'hello' }}>
            Linky!
          </ListGroupItemLink>
        </ListGroup>
        <RouteHandler />
      </div>
    );*/
  }
});

var Destination = React.createClass({
  render: function() {
    return <div>You made it!</div>;
  }
});

var FormsStrategicPlan = require("./FormsStrategicPlan.jsx");

var routes = (
  <Route handler={App} path="/">
    <Route name="strategicPlan" path="forms/strategicPlan" handler={FormsStrategicPlan} />
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
/*var content = document.getElementById('content');
var Navbar = require('./nav/Navbar.jsx');
var FormsStrategicPlan = require("./FormsStrategicPlan.jsx");
//var content = document.body;

var Routes = (
  <Route handler={EllenFormsApp}>
    <Route name="/" handler={EllenFormsApp}/>
    <Route name="/forms/strategic-plan" handler={FormsStrategicPlan}/>
  </Route>
);


var Navbar = require('./nav/Navbar.jsx');
React.render(<Navbar/>, document.getElementById('navigation'));

Router.run(Routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler/>, content);
});

*/