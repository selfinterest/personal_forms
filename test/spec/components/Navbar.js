'use strict';

xdescribe('Navbar', function () {
  var React = require('react/addons');
  var Navbar, component;

  beforeEach(function () {
    Navbar = require('components/nav/Navbar.jsx');
    component = React.createElement(Navbar);
  });

  it('should create a new instance of Navbar', function () {
    expect(component).toBeDefined();
  });
});
