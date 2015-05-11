'use strict';

var React = require('react/addons');
var _ = require("underscore");

require('styles/ListBox.scss');
var ListBox = React.createClass({

    getInitialState: function(){
        return {items: this.props.items, onSubmit: this.props.onSubmit};
    },
    handleChange: function(evt){
        this.setState({value: evt.target.value});
    },
    handleKeyDown: function(evt) {
        if (evt.keyCode == 13 ) {
            return this.submit(evt);
        }
    },
    submit: function(evt) {
        var items = this.state.items;
        items.push(this.state.value);
        this.setState({value: '', items: items});
        if(this.state.onSubmit) {
            this.state.onSubmit({items: this.state.items, name: this.props.name});
        }
    },
    remove: function(index){
        if(typeof index !== "undefined") {
            var items = this.state.items;
            items.splice(index, 1);
            this.setState({
                items: items,
                value: this.state.value
            });

            if(this.state.onSubmit) {       //it's not really submit anymore, is it?
                this.state.onSubmit({items: this.state.items, name: this.props.name});
            }
        }

    },
    render: function () {
        var placeholder = this.props.placeholder;
        var value = this.state.value;
        return (
            <div>
                <ul>
                    {this.state.items.map(function(s, i){
                        var boundClick = this.remove.bind(this, i);
                        return <li key={i}>{s}<span className="glyphicon glyphicon-remove pull-right icon-button" onClick={boundClick}></span></li>;
                    }.bind(this))}
                </ul>
                <div className="form-inline">
                    <div className="form-group">
                        <input placeholder={placeholder} value={value} className="form-control" onChange={this.handleChange} onKeyDown={this.handleKeyDown}/>
                    </div>
                    <button className="btn btn-primary" onClick={this.submit}>Submit</button>
                </div>
            </div>


          );
    }
});

module.exports = ListBox;

