//if successful, returns a users
//if unsuccessful, returns an error message.
//logout just sets user to empty object
function sessions(state = {}, action) {
	switch(action.type) {
		case 'LOGIN_REQUEST':
			// console.log("THIS WORKED", action)
			return Object.assign({}, state, {'username': action.username})
		case 'LOGIN_SUCCESSFUL':
			console.log("THIS WORKED SUCCESS", action)
			return Object.assign({}, state, {'user': action.user});
		case 'LOGIN_FAILURE':
			console.log('this worked failure :(', action)
			return Object.assign({}, state, {'error': action.error});
		case 'LOGOUT_USER':
			return Object.assign({}, state, {'user': action.user})
		default:
			return state;
	}
}
module.exports = sessions;