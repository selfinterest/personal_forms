'use strict';

describe('ListBox', function () {
  var React = require('react/addons');
  var ListBox, component;

  beforeEach(function () {
    ListBox = require('components/ListBox.js');
    component = React.createElement(ListBox);
  });

  it('should create a new instance of ListBox', function () {
    expect(component).toBeDefined();
  });
});
