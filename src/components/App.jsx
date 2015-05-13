var React = require('react');
var Router = require('react-router/build/npm/lib');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var SignInOrOut = require('./SignInOrOut.jsx');
var Navbar = require('react-bootstrap/lib/Navbar');
var Nav = require('react-bootstrap/lib/Nav');
var NavItem = require('react-bootstrap/lib/NavItem');


var App = React.createClass({
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <div>
        <p>
          <SignInOrOut />
            <Navbar>
                <Nav bsStyle='pills' activeKey={1}>
                    <NavItem><Link to="about">About</Link></NavItem>
                    <NavItem><Link to="contacts">Contacts</Link></NavItem>
                </Nav>
            </Navbar>
        </p>
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App;
