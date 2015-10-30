'use strict';
var mongoose = require("mongoose");

var schema = new mongoose.Schema({
	source: String,
	name: String,
	artist: String
});

mongoose.model("Song", schema);