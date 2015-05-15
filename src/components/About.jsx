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
    renderItem:function(){

        var item = this.state.list.map(function(task,index){
            console.log("render")
            return(
                <tr>
                    <td>{index}</td>
                    <td>{task}</td>
                </tr>
            )
        })
        return item

        //console.log(React.findDOMNode(this.refs.input))
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
                        <input className="form-control" id="exampleInputName2" onChange={this.handleChange} placeholder="Jane Doe"/>
                        <span>Tooltip</span>
                    </div>
                    <input type="submit" value="Go" className="btn btn-default"/>
                    </form>
                <table className="table">
                    <tr>
                        <th>index</th>
                        <th>taskName</th>
                    </tr>
                    <tbody>
                        {this.renderItem()}
                    </tbody>
                </table>
            </div>
        </div>
    );
  }
});

module.exports = About;
