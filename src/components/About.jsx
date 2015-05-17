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
    _onDestroyClick: function(e) {
        console.log(e)
    },
    handleChange:function(e){
        this.setState({value:e.target.value})
    },
    render: function() {
        var commentNodes = this.state.list.map(function (task, index) {
            return (
                <tr>
                    <td>{index+1}</td>
                    <td>{task}</td>
                    <td>
                        <button onClick={this._onDestroyClick} className="btn-danger btn-sm" id={"task_"+index} ><span className="glyphicon glyphicon-trash" aria-hidden="true"></span>Delete</button>
                    </td>
                </tr>
            );
        });
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
                <table className="table table-hover">
                    <thead>
                       <td>index</td>
                       <td>Task</td>
                       <td>Action</td>
                   </thead>
                    <tbody>
                        {this.state.list.map(function (task, index) {
                            return (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{task}</td>
                                    <td>
                                        <button onClick={this._onDestroyClick} className="btn-danger btn-sm" id={"task_"+index} ><span className="glyphicon glyphicon-trash" aria-hidden="true"></span>Delete</button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
      }
});

module.exports = About;
