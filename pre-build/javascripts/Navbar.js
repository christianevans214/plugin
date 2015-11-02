var React = require('react');

var Navbar = React.createClass({
	render: function() {
		return (
			<div className = "nav-container">
				<div className = "nav-flex nav-float-left"></div>
				<div className = "nav-flex nav-center">
					<div className = "nav-logo">
						<h1>Plug In</h1>
					</div>
				</div>
				<div className = "nav-flex nav-float-right"></div>
			</div>
			)
	}
})

module.exports = Navbar;