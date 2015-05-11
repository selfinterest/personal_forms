'use strict';

var EllenFormsAppDispatcher = require('../dispatcher/EllenFormsAppDispatcher');
var FormConstants = require("../constants/FormConstants");
var ActionTypes = FormConstants.ActionTypes;
var FormInputActionCreators = {

    createFormInput: function(formId, fieldName, input){
        EllenFormsAppDispatcher.dispatch({
            type: ActionTypes.FORM_INPUT,
            timestamp: Date(),
            formId: formId,
            fieldName: fieldName,
            input: input
           });
    }
};

module.exports = FormInputActionCreators;
