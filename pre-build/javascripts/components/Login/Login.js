var React = require('react');
var store = require('../../store/index.js');
var { login } = require("../../actions/session.actions.js");

var Login = React.createClass({
	attemptLogin: function() {
		var credentials = {
			email: this.refs.email.value,
			password: this.refs.password.value
		 }
		 this.refs.email.value = "";
		 this.refs.password.value = "";
		 store.dispatch(login(credentials))
	},
	render: function () {
		return (
			<div className = 'app-body'>
				<div className="login column">
					<div className = "login container">
						<h3>L o g i n</h3>
						<hr />
						<div>
							<label>Email</label>
							<input type="text" ref="email" />
							<label>Password</label>
							<input type="text" ref="password" />
							<button onClick={this.attemptLogin}>SAVE</button>
						</div>
					</div>
				</div>
			</div>
			);
	}
});

module.exports = Login;