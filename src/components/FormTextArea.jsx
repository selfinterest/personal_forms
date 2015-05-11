'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;

require('styles/FormTextArea.scss');

var FormTextArea = React.createClass({
	propTypes: {
		className: ReactPropTypes.string,
		id: ReactPropTypes.string,
		placeholder: ReactPropTypes.string,
		onSave: ReactPropTypes.func.isRequired,
		value: ReactPropTypes.string
	},
	getInitialState: function() {
    	return {
      		value: this.props.value || ''
    	};
  	},
  	_save: function(event){
  		this.setState({
  			value: event.target.value
  		});

  		//invoke the callback
  		this.props.onSave({value: event.target.value, id: event.target.id})
  	},
  render: function () {
    return (
    	<textarea
    		className={this.props.className} rows="4"
			id={this.props.id}
    		placeholder={this.props.placeholder}
    		onBlur={this._save}
    		onChange={this._save}
    		onKeyup={this._save}
    		onPaste={this._save}
        	value={this.state.value}
		></textarea>
      );
  }
});

module.exports = FormTextArea;

