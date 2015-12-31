var axios = require("axios");
var store = require('../store/index.js');
var {throwErr} = require('./error.actions.js');

//action types
const LOGOUT_USER = "LOGOUT_USER";
const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
const USER_RETURN = 'USER_RETURN';



/*
**************
*~ Actions  ~*
**************
*/

const returnUser = function(user) {
	return {
		type: USER_RETURN,
		user: user,
		loggedIn: true
	}	
};

const logoutUser = function(email) {
	return {
		type: LOGOUT_USER,
		user: null,
		loggedIn: false
	}
};

const loginSuccessful = function(user){
	return {
		type: LOGIN_SUCCESSFUL,
		loggedIn: true,
		user,
	}
};

/*
**************
*~Middleware~*
**************
*/

const login = function(credentials) {
	return function(dispatch){
		return axios.post('api/auth/login', credentials)
			.then(response => {
				return store.dispatch(loginSuccessful(response.data));
			})
			.catch(response => {
				console.log(response)
				return store.dispatch(throwErr(response));
			});
	};
};

const logout = function() {
	return function(dispatch){
		return axios.get('api/auth/logout')
			.then(response => {
				return store.dispatch(logoutUser());
			})
			.catch(response => {
				return store.dispatch(throwErr(response));
			});
	};
};

const getUser = function(){
	return function(dispact){
		return axios.get('api/auth/user')
			.then(response => {
				store.dispatch(returnUser(response.data));
			})
			.catch(response => {
				return store.dispatch(throwErr(response));
			});
	};
};



module.exports = { 
	logoutUser, 
	loginSuccessful,
	login,
	getUser,
	returnUser,
	logout
}