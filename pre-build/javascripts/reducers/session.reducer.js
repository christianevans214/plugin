var INITIAL_STATE = {
	user: null,
	loggedIn: false
};
function sessions(state = INITIAL_STATE, action) {
	var {type, user, loggedIn} = action;
	switch(type) {
		case 'LOGIN_SUCCESSFUL':
			return Object.assign({}, state, {user, loggedIn});
		case 'LOGOUT_USER':
			return Object.assign({}, state, {user, loggedIn});
		case 'USER_RETURN':
			return Object.assign({}, state, {user, loggedIn});
		default:
			return state;
	};
}
module.exports = sessions;