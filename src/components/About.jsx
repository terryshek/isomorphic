var React = require('react');
var Jumbotron = require('react-bootstrap/lib/Jumbotron');
var Button = require('react-bootstrap/lib/Button');
var Input = require('react-bootstrap/lib/Input');
var AboutStore =require("../stores/AboutStore");
var FluxibleMixin = require('fluxible/addons/FluxibleMixin');
var aboutTask = require('../actions/aboutTask');
var item =  React.createClass({

    getDefaultProps:function(){
        return{
            results:["terry","apple","orange"]
        }
    },
    getInitialState:function(){
        console.log(this.props.results)
    },
    render:function(){
        console.log("run")
        return(
                <div className="row">
                    <div className="col-md-4">terry</div>
                    <div className="col-md-4">addd</div>
                    <div className="col-md-4 btn btn-danger btn-sm" role="button" onClick={this.prop.handleClick}
                         key={index}>Delete
                    </div>
                </div>
        )
    }
});
var About = React.createClass({
    contextTypes: {
        router: React.PropTypes.func.isRequired
    },

    mixins: [FluxibleMixin],

    statics: {
        storeListeners: [AboutStore]
    },

    getInitialState: function() {
        return this.getStateFromStores();
    },

    getStateFromStores: function () {
        return {
            list: this.getStore(AboutStore).getCurrentList(),
            value: ''
        };
    },

    onChange: function() {
        this.setState(this.getStateFromStores());
    },

    addTask:function(e){
        e.preventDefault();
        var task =  this.state.value;
        this.context.executeAction(aboutTask, {task:task});
    },
    handleClick: function(e) {
        e.preventDefault();
        var task =  e.target.key;
        console.log(task)
    },
    handleChange:function(e){
        this.setState({value:e.target.value})
    },
    render: function() {
        return (
            <div className="container">
                <div className="row">
                    <form className="form-inline" onSubmit={this.addTask}>
                        <div className="form-group tooltips">
                            <input className="form-control" id="exampleInputName2" value={this.state.value} onChange={this.handleChange} placeholder="Jane Doe"/>
                            <span>Tooltip</span>
                        </div>
                        <input type="submit" value="Go" className="btn btn-default"/>
                    </form>
                </div>
                <div className="row">
                    <div className="col-md-4">index</div>
                    <div className="col-md-4">Task</div>
                    <div className="col-md-4">Action</div>
                </div>
                <item handleClick={this.handleClick}/>
            </div>
        );
      }
});

module.exports = About;
