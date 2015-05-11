/** @jsx React.DOM */

'use strict';


var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var FormTextArea = require('./FormTextArea.jsx');
var ListBox = require('./ListBox.jsx');
var FormsStrategicPlan = React.createClass({
	_onSave: function(entity){
		console.log(entity);
	},
    getInitialState: function(){
      return {value: "", strengths: ["test"]}
    },
    handleChange: function(){
        this.setState({value: event.target.value});
    },
    handleKeyDown: function(evt) {
        if (evt.keyCode == 13 ) {
            return this.submit();
        }
    },
    submit: function() {
      var strengths = this.state.strengths;
      strengths.push(this.state.value);
      this.setState({value: '', strengths: strengths});
    },
  render: function() {
      var value = this.state.value;
      var strengths = this.state.strengths;
      console.log(strengths);
    return (
      <div className='row form-container'>
        <ReactTransitionGroup transitionName="fade">
          <h1>Strategic plan</h1>
          <p>This document sets out a strategic plan for your business. It reviews strengths, weaknesses, threats, and opportunities;
          presents a series of statements relating to your businesss vision, mission, values, and objectives; and sets out its proposed strategic goals.
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
                                <ul>
                                    {strengths.map(function(s, i){
                                        return <li key={i}>{s}</li>;
                                    })}
                                </ul>

                                <div className="form-inline">
                                    <div className="form-group">
                                        <input placeholder="Add new strength" value={value} className="form-control" onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
                                    </div>
                                    <button className="btn btn-primary" onClick={this.submit}>Submit</button>
                                </div>


		           			</div>
	           			</div>
           			</div>
           			<div className="col-lg-6">
	           			<div className="panel panel-default">
	           				<div className="panel-heading">Weaknesses</div>
	           				<div className="panel-body">
		           				<FormTextArea id="weaknesses" className="form-control" onSave={this._onSave}/>
	           				</div>
	           			</div>
           			</div>
           		</div>
           		<div className="row">
	            	<div className="col-lg-6">
	           			<div className="panel panel-default">
           					<div className="panel-heading">Opportunity</div>
		           			<div className="panel-body">
		           				<FormTextArea id="opportunity" className="form-control" onSave={this._onSave}/>
		           			</div>
	           			</div>
           			</div>
           			<div className="col-lg-6">
	           			<div className="panel panel-default">
	           				<div className="panel-heading">Threats</div>
	           				<div className="panel-body">
		           				<FormTextArea id="threats" className="form-control" onSave={this._onSave}/>
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
