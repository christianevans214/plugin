// var applyMiddleware = require('redux').applyMiddleware;
// var createStore = require('redux').createStore;
const {createStore, applyMiddleware} = require('redux');
var rootReducer = require('../reducers/index.js');
var thunk = require('redux-thunk');

const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);


const store = createStoreWithMiddleware(rootReducer);

module.exports = store;