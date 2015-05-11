/** @jsx React.DOM */

'use strict';


var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var ListBox = require('./ListBox.jsx');
var FormInputActionCreators = require("../actions/FormInputActionCreators.js");

var FormsStrategicPlan = React.createClass({
	_onSave: function(entity){
		console.log(entity);
	},
    save: function(entity){
        var items = entity.items;
        var name = entity.name; //the name of the particular listbox
        FormInputActionCreators.createFormInput("test", name, items);
    },
    getInitialState: function(){
      return {strengths: ["test"], weaknesses: ["some weakness"], opportunities: ["an opportunity!"], threats: ["dangerous threat"]}
    },

  render: function() {

    return (
      <div className='row form-container'>
        <ReactTransitionGroup transitionName="fade">
          <h1>Strategic plan</h1>
          <p>This document sets out a strategic plan for your business. It reviews strengths, weaknesses, threats, and opportunities;
          presents a series of statements relating to your business's vision, mission, values, and objectives; and sets out its proposed strategic goals.
          </p>
          <h2>Strengths, Weaknesses, Opportunities & Threats</h2>
          <p>This strategic plan addresses the following key strengths, weaknesses,
           threats, and opportunities for your business.</p>
           <div className="col-lg-12">
           		<div className="row">
	            	<div className="col-lg-6">
	           			<div className="panel panel-default">
           					<div className="panel-heading">Strength</div>
		           			<div className="panel-body">
                                <ListBox placeholder="Add new strength" items={this.state.strengths} onSubmit={this.save} name="strengths"/>
		           			</div>
	           			</div>
           			</div>
           			<div className="col-lg-6">
	           			<div className="panel panel-default">
	           				<div className="panel-heading">Weaknesses</div>
	           				<div className="panel-body">
		           				<ListBox placeholder="Add new weakness" items={this.state.weaknesses} onSubmit={this.save} name="weaknesses"/>
	           				</div>
	           			</div>
           			</div>
           		</div>
           		<div className="row">
	            	<div className="col-lg-6">
	           			<div className="panel panel-default">
           					<div className="panel-heading">Opportunity</div>
		           			<div className="panel-body">
		           				<ListBox placeholder="Add new opportunity" items={this.state.opportunities} onSubmit={this.save} name="opportunities"/>
		           			</div>
	           			</div>
           			</div>
           			<div className="col-lg-6">
	           			<div className="panel panel-default">
	           				<div className="panel-heading">Threats</div>
	           				<div className="panel-body">
                                <ListBox placeholder="Add new threat" items={this.state.threats} onSubmit={this.save} name="threats"/>
	           				</div>
	           			</div>
           			</div>
           		</div>
           		<div className="row">
           			<h2>Vision</h2>
           			<p>Your vision of your business in 12 months is</p>
           		</div>
           </div>

        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = FormsStrategicPlan;
