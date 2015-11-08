var React = require("react");
var Navbar = require('./Navbar');
// var Splash = require('./Splash');
var Router = require('react-router');
var RouteHandler = require('react-router').RouteHandler

var App = React.createClass({
	render: function(){
		return (
		<div>
			<Navbar />
			<RouteHandler />
		</div>
		)
	}
});



module.exports = App;