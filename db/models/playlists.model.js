'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	dateCreated: {type: Date, default: Date.now},
	owner: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
	guests: [{type:mongoose.Schema.Types.ObjectId, ref:"User"}],
	songs: [{type:mongoose.Schema.Types.ObjectId, ref:"Song"}]
})

mongoose.model("Playlist", schema);