var React = require('react');
var Router = require('react-router/build/npm/lib');
var Route = Router.Route;
var Redirect = Router.Redirect;
var NotFoundRoute = Router.NotFoundRoute;

module.exports = (
  <Route path="/" handler={require('./components/App.jsx')}>
    <Route name="signin" handler={require('./components/SignIn.jsx')}/>
    <Route name="about" handler={require('./components/About.jsx')}/>
    <Route name="contacts" handler={require('./components/ContactList.jsx')}/>
    <Route name="bootstrap" handler={require('./components/reactbootstrap.jsx')}/>
    <Route name="contact-create" path="/contacts/create" handler={require('./components/CreateContact.jsx')}/>
    <Route name="contact-details" path="/contact/:id" handler={require('./components/ContactDetails.jsx')}/>
    <Route name="contact-messages" path="/contact/:id/messages" handler={require('./components/ContactMessages.jsx')}/>
    <Redirect from="/" to="contacts" />
    <NotFoundRoute name="not-found" handler={require('./components/NotFound.jsx')}/>
  </Route>
);
