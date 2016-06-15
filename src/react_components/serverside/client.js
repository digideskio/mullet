var React = require('react');
var ReactDom = require('react-dom');
var AppComponent = require('./facebook.jsx');


var App = React.createFactory(AppComponent);
var mountNode = document.getElementById('AppMount');
var serverState = window.state;

ReactDom.render(App(serverState), mountNode);
