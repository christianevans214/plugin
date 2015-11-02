var React = require("react");
var Navbar = require('./Navbar');

var App = React.createClass({
	render: function(){
		return (
		<div>
			<Navbar />
		</div>
		)
	}
});

React.render(<App />, document.getElementById("app-container"));