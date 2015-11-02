var React = require('react');

var Navbar = React.createClass({
	render: function() {
		return (
			<div className = "nav-container">
				<div className = "nav-flex nav-float-left"></div>
				<div className = "nav-flex nav-center">
					<ul className ="nav-center-list">
						<li className = "nav-center-list-item nav-link">Discover</li>
						<li className = "nav-center-list-item nav-link">Account</li>
						<li className = "nav-center-list-item">
							<div className = "nav-logo">
								<h1>Plug In</h1>
							</div>
						</li>
						<li className = "nav-center-list-item nav-link">About</li>
						<li className = "nav-center-list-item nav-link">Contact</li>
					</ul>
				</div>
				<div className = "nav-flex nav-float-right nav-link"></div>
			</div>
			)
	}
})

module.exports = Navbar;