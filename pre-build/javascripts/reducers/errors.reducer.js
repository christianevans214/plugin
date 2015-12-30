var INITIAL_STATE = {
	err: null,
}

function errs(state=INITIAL_STATE, action){
	var {err, type} = action;
	switch(type){
		case 'APP_ERR':
			return Object.assign({}, state, { err });
		default:
			return state;
	};
}

module.exports = errs;