var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
var React = require('react');
var Link = require('react-router').Link

//need to refactor this
var Navbar = React.createClass({
	render: function() {
		//have an if statement to check if user is logged in. If so, show Account, if not show Login.
		return (
			<div className = "nav-container">
				<div className = "nav-flex nav-float-left"></div>
				<div className = "nav-flex nav-center">
					<ul className ="nav-center-list">
						<li key ="Discover" className = "nav-center-list-item nav-link">Discover</li>
						<li key ="Account" className = "nav-center-list-item nav-link">Account</li>
						<li className = "nav-center-list-item">
							<Link to="/"><div className = "nav-logo">
								<h1>Plug In</h1>
							</div></Link>
						</li>
						<li key ="Login" className = "nav-center-list-item nav-link"><Link to="/login">Login</Link></li>
					</ul>
				</div>
				<div className = "nav-flex nav-float-right nav-link"></div>
			</div>
			)
	}
})

module.exports = Navbar;