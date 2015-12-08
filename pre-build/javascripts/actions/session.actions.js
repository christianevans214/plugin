var axios = require("axios");
var store = require('../store/index.js')

//action types
const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGOUT_USER = "LOGOUT_USER";
const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
const LOGIN_FAILURE = "LOGIN_FAILURE";


//action creators
const loginRequest = function(credentials){
	var {email, password} = credentials
	return {
		type: LOGIN_REQUEST, 
		email,
		password,
		time: Date.now()
	};
};

const logoutUser = function(email) {
	return {
		type: LOGOUT_USER,
		user: {},
		time: Date.now()
	}
};

const loginSuccessful = function(user){
	return {
		type: LOGIN_SUCCESSFUL,
		user
	}
};

const loginFailure = function(email){
	return {
		type: LOGIN_FAILURE,
		error: "Incorrect login credentials"
	}
};

const login = function(credentials) {
	return function(dispatch){
		return axios.post('/api/auth/login', credentials)
			.then(response => {
				return store.dispatch(loginSuccessful(response.data));
			})
			.catch(response => {
				return store.dispatch(loginFailure(credentials.email));
			});
	}
};

module.exports = { 
	loginRequest,
	logoutUser, 
	loginSuccessful,
	loginFailure,
	login
}