var React = require("react");
var Navbar = require('./Navbar/Navbar');
var { Provider, connect } = require('react-redux');
var Router = require('react-router');
var RouteHandler = require('react-router').RouteHandler;
var store = require("../store/index.js");
var { getUser } = require('../actions/session.actions.js');


var App = React.createClass({
	componentDidMount: function(){
		store.dispatch(getUser());
	},
	render: function(){
		return (
		<Provider store={store}>
		<div>
			<Navbar />
			<RouteHandler />
		</div>
		</Provider>
		)
	}
});

module.exports = App;