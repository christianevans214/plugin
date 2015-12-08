//reducers to import
var sessionReducer = require('./session.reducer.js')

var combineReducers = require('redux').combineReducers;

module.exports = combineReducers({
	sessionReducer
});