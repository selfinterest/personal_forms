'use strict';

describe('EventsStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/EventsStore.js');
  });

  it('should be defined', function() {
    expect(store).to.not.be.undefined;
  });

  it('should have an "on" method', function(){
  	expect(store.on).to.be.a("function");
  });

  it('should have a dispatchToken', function() {
  	expect(store.dispatchToken).to.not.be.undefined;
  });

  it("should ")
});
