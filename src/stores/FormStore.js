'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var EllenFormsAppDispatcher = require('../dispatcher/EllenFormsAppDispatcher');
var FormConstants = require("../constants/FormConstants");
var ActionTypes = FormConstants.ActionTypes;
var EventsStore = require("./EventsStore.js");

var FormStore = assign({}, EventEmitter.prototype, {

});

FormStore.dispatchToken = EllenFormsAppDispatcher.register(function(action) {


  switch(action.type) {
    case ActionTypes.FORM_INPUT:
        //console.log(EventsStore);
        console.log("Waiting");
        EllenFormsAppDispatcher.waitFor([EventsStore.dispatchToken]);
        //Here we would do something like modify the form in the database.
        console.log("Save the form somewhere");
        console.log(action);
        break;
    default:
  }

});

module.exports = FormStore;
