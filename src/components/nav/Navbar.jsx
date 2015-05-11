/** @jsx React.DOM */

'use strict';

var React = require('react/addons');

var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var DropdownButton = require('react-bootstrap').DropdownButton;
var MenuItem = require('react-bootstrap').MenuItem;

var nav = React.createClass({
	render: function () {
		return (
		  <Navbar brand='Ellen Forms'>
		    <Nav>
		      <NavItem eventKey={1} href='#'>Some</NavItem>
		      <NavItem eventKey={2} href='#'>Links</NavItem>
		      <DropdownButton eventKey={3} title='Forms'>
		        <MenuItem eventKey='1' href="/forms/strategic-plan">Strategic Plan</MenuItem>
		        <MenuItem eventKey='2'>Another action</MenuItem>
		        <MenuItem eventKey='3'>Something else here</MenuItem>
		        <MenuItem divider />
		        <MenuItem eventKey='4'>Separated links</MenuItem>
		      </DropdownButton>
		    </Nav>
		  </Navbar>
		);
	}

});


module.exports = nav;

