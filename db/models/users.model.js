'use strict';
var mongoose = require("mongoose");
var crypto = require("crypto");
var schema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	password: String,
	salt: String,
	email: String,
	playlists:[{ type: mongoose.Schema.Types.ObjectId, ref: "Playlist" }]
})

// mongoose.model("User", schema);
var generateSalt = function(){
	return crypto.randomBytes(16).toString('base64');
};

var encryptPassword = function(plainText, salt){
	var hash = crypto.createHash('sha1');
	hash.update(plainText);
	hash.update(salt);
	return hash.digest('hex');
};

schema.statics.generateSalt = generateSalt;
schema.statics.encryptPassword = encryptPassword;

schema.pre('save', function(next){
	if (this.isModified('password')){
		this.salt = generateSalt();
		this.password = encryptPassword(this.password, this.salt);
	}

	next();
});


schema.method('correctPassword', function(candidatePassword) {
    return encryptPassword(candidatePassword, this.salt) === this.password;
});

mongoose.model('User', schema);