'use strict';

xdescribe('EllenFormsApp', function () {
  var React = require('react/addons');
  var EllenFormsApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    EllenFormsApp = require('components/EllenFormsApp.js');
    component = React.createElement(EllenFormsApp);
  });

  it('should create a new instance of EllenFormsApp', function () {
    expect(component).to.not.be.undefined;
  });
});
