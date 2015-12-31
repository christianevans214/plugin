// var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
const React = require('react');
const { Link } = require('react-router');
const { connect } = require('react-redux');
const { logout } = require('../../actions/session.actions.js');

//need to refactor this
const Navbar = React.createClass({
	loginStatus: function(){
		const { dispatch, loggedIn, user } = this.props;
		if (loggedIn) {
			return (
				<button onClick={()=>{dispatch(logout())}}>
					Logout
				</button>
				)
		}
		else {
			return(
				<Link to='/login'>
					Login
				</Link>
				)
		}
	},
	render: function() {
		const { dispatch, loggedIn, user } = this.props;
		var accountBtn = loggedIn ? <li key ="Account" className = "nav-center-list-item nav-link">Account</li> : null
		return (
			<div className = "nav-container">
				<div className = "nav-flex nav-float-left"></div>
				<div className = "nav-flex nav-center">
					<ul className ="nav-center-list">
						<li key ="Discover" className = "nav-center-list-item nav-link">Discover</li>
						<li className = "nav-center-list-item">
							<Link to="/"><div className = "nav-logo">
								<h1>Plug In</h1>
							</div></Link>
						</li>
						{accountBtn}
						<li key ="Login" className = "nav-center-list-item nav-link">
							{this.loginStatus()}
						</li>
					</ul>
				</div>
				<div className = "nav-flex nav-float-right nav-link"></div>
			</div>
			);
		}
});

function select(state){
	return state.sessionReducer
}

module.exports = connect(select)(Navbar);