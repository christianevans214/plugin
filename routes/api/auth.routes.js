var router = require("express").Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var session = require('express-session');

module.exports = router;

router.post('/login', function(req, res, next){
	User.findOne({email: req.body.email})
		.then(function(user){
			if (user && user.correctPassword(req.body.password)){
				req.session.userId = user._id;
				res.send(Object.assign(user, {password: "", salt: ""}));
			}
			else {
				return next(err);
			}
		})
		.then(null, function(err){
			return next(err);
		});
});