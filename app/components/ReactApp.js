var React = require('react');

var ReactApp = React.createClass({

      render: function () {
        return (
          <div>
            <img src="/images/logo.png" alt="PI Logo"/>
            <h1>Isomorphic ReactJS is cool!</h1>
          </div>
        );
      }
  });

module.exports = ReactApp;