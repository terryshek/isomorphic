var React = require('react');

var Html = React.createClass({
    propTypes: {
      markup: React.PropTypes.string,
      state: React.PropTypes.string,
      config: React.PropTypes.string
    },

    getDefaultProps: function() {
      return {
        markup: '',
        state: '',
        config: ''
      };
    },

    render: function() {
      return (
        <html>
        <head>
          <meta charSet="utf-8" />
          <title>Isomorphic</title>
          <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
        </head>
        <body>
            <div className="container">
          <div id="app" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
                </div>
        </body>
        <script dangerouslySetInnerHTML={{__html: this.props.state}}></script>
        <script dangerouslySetInnerHTML={{__html: this.props.config}}></script>
        <script src="/public/client.js" defer></script>
        </html>
      );
    }
});

module.exports = Html;
