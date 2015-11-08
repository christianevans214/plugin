var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var React = require('react');
var Link = require('react-router').Link

//need to refactor this
var Navbar = React.createClass({
	render: function() {
		return (
			<div className = "nav-container">
				<div className = "nav-flex nav-float-left"></div>
				<div className = "nav-flex nav-center">
					<ul className ="nav-center-list">
						<li key ="Discover" className = "nav-center-list-item nav-link">Discover</li>
						<li key ="Account" className = "nav-center-list-item nav-link">Account</li>
						<li className = "nav-center-list-item">
							<div className = "nav-logo">
								<h1>Plug In</h1>
							</div>
						</li>
						<li key ="About" className = "nav-center-list-item nav-link">About</li>
						<li key ="Contact" className = "nav-center-list-item nav-link">Contact</li>
					</ul>
				</div>
				<div className = "nav-flex nav-float-right nav-link"></div>
			</div>
			)
	}
})

module.exports = Navbar;