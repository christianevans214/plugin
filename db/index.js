'use strict';
var mongoose = require('mongoose');
var path = require('path');
var chalk = require('chalk');
var db = mongoose.connect("mongodb://localhost:27017/plugin").connection;



//so that all models are registered and can be called with
// 'mongoose.model("User")'
require("./models/index.model.js");

var startDbPromise = new Promise(function(resolve, reject){
	db.on('open', resolve);
	db.on('error', reject);
});

console.log(chalk.yellow("Opening connection to MongoDB . . ."));
startDbPromise.then(function(){
	console.log(chalk.green('MongoDB connection opened!'));
});

module.exports = startDbPromise;