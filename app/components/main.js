var React = require('react');
var ReactDOM = require('react-dom');
var ReactApp = React.createFactory(require('./ReactApp'));

var mountNode = document.getElementById('react-main-mount');

ReactDOM.render(new ReactApp({}), mountNode);
