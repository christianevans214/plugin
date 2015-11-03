var React = require("react");
var Navbar = require('./Navbar');
var Splash = require('./Splash');

var App = React.createClass({
	render: function(){
		return (
		<div>
			<Navbar />
			<Splash />
		</div>
		)
	}
});

React.render(<App />, document.getElementById("app-container"));