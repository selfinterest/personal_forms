'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var EllenFormsAppDispatcher = require('../dispatcher/EllenFormsAppDispatcher');
var FormConstants = require("../constants/FormConstants");
var FormActionTypes = FormConstants.ActionTypes;
var _events = [];
var CHANGE_EVENT = "change";

var EventsConstants = {
	EVENT_CREATE: "event"
};

function create(someEvent) {
	var id = Date.now();
	_events.push({
		id: id,
		theEvent: someEvent,
		executed: false
	});
}

var EventsStore = assign({}, EventEmitter.prototype, {
	getAll: function(){
		return _events;
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	}

});

EventsStore.on("add", function(someEvent){
	this.events.push(someEvent);
});



EventsStore.dispatchToken = EllenFormsAppDispatcher.register(function(action) {

  switch(action.type) {
    case FormActionTypes.FORM_INPUT:
        console.log("Saving the event somewhere");
        break;
  	case EventsConstants.EVENT_CREATE:
  		var theEvent = action.event;
  		create(theEvent);
  		EventsStore.emitChange();
          break;
    default:

  }

});

module.exports = EventsStore;
