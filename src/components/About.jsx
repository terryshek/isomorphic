var React = require('react');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var Button = require('react-bootstrap/lib/Button');
var Input = require('react-bootstrap/lib/Input');
var AboutStore =require("../stores/AboutStore");
var FluxibleMixin = require('fluxible/addons/FluxibleMixin');

var About = React.createClass({
    getInitialState:function(){
        return {
            value: ''
        };
    },
    getInitialState: function() {
        return this.getStateFromStores();
    },
    getStateFromStores: function () {
        return {
            contact: this.getStore(AboutStore).getContact(this.getContactId()),
            messages: this.getStore(AboutStore).getMessages(this.getContactId()),
            loading: this.getStore(AboutStore).isLoadingMessages()
        };
    },
    validationState:function(){
        var length = this.state.value.length;
        if (length > 10) { return 'success'; }
        else if (length > 5) { return 'warning'; }
        else if (length > 0) { return 'error'; }
    },

    handleChange:function(){
        // This could also be done using ReactLink:
        // http://facebook.github.io/react/docs/two-way-binding-helpers.html
        this.setState({
            value: this.refs.input.getValue()
        });
    },
  render: function() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                        <Input
                            type='text'
                            value={this.state.value}
                            placeholder='Enter text'
                            help='Validation is based on string length.'
                            bsStyle={this.validationState()}
                            hasFeedback
                            ref='input'
                            groupClassName='group-class'
                            wrapperClassName='wrapper-class'
                            labelClassName='label-class'
                            onChange={this.handleChange}/>
                </div>
                <div className="col-xs-6 col-md-6">
                    <Button bsStyle='info'>Add</Button>
                </div>
            </div>
        </div>
    );
  }
});

module.exports = About;
