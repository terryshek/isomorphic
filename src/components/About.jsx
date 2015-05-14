var React = require('react');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var Button = require('react-bootstrap/lib/Button');
var Input = require('react-bootstrap/lib/Input');
var AboutStore =require("../stores/AboutStore");
var FluxibleMixin = require('fluxible/addons/FluxibleMixin');
var aboutTask = require('../actions/aboutTask');

var About = React.createClass({
    contextTypes: {
        router: React.PropTypes.func.isRequired
    },

    mixins: [FluxibleMixin],

    statics: {
        storeListeners: [AboutStore]
    },

    getInitialState: function() {
        console.log(this.getStateFromStores())
        return this.getStateFromStores();
    },

    getStateFromStores: function () {
        return {
            list: this.getStore(AboutStore).getCurrentList(),
            value: ''
        };
    },

    validationState:function(){
        var length = this.state.value.length;
        if (length > 10) { return 'success'; }
        else if (length > 5) { return 'warning'; }
        else if (length > 0) { return 'error'; }
    },

    onChange: function() {
        this.setState(this.getStateFromStores());
    },

    addTask:function(){
        var task = this.refs.input.getValue();
        this.context.executeAction(aboutTask, {task:task});
    },

  render: function() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-md-6">
                        <Input
                            type='text'
                            placeholder='Enter text'
                            help='Validation is based on string length.'
                            bsStyle={this.validationState()}
                            hasFeedback
                            ref='input'
                            groupClassName='group-class'
                            wrapperClassName='wrapper-class'
                            labelClassName='label-class'
                            />
                </div>
                <div className="col-xs-6 col-md-6">
                    <Button bsStyle='info' onClick={this.addTask}>Add</Button>
                </div>
                <table className="table">
                    <tr>
                        <th>index</th>
                        <th>taskName</th>
                    </tr>
                </table>
            </div>
        </div>
    );
  }
});

module.exports = About;
