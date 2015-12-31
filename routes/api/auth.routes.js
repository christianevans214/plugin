var router = require("express").Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
var session = require('express-session');

module.exports = router;

router.get('/logout', function(req,res,next){
	req.session.userId = null;
	res.status(200).end();
})

router.post('/login', function(req, res, next){
	User.findOne({email: req.body.email})
		.then(function(user){
			if (user && user.correctPassword(req.body.password)){
				req.session.userId = user._id;
				res.send(Object.assign(user, {password: "", salt: ""}));
			}
			else {
				return next(new Error('credentials incorrect!'));
			}
		})
		.then(null, function(err){
			return next(new Error('credentials incorrect!'));
		});
});
router.get('/user', function(req, res, next){
	User.findById(req.session.userId).exec()
		.then(function(user){
			if(!user) res.status(400).send('user not found');
			else {
				res.send({email: user.email,
					  firstName: user.firstName,
					  lastName: user.lastName
					 });
			}
		})
		.then(null, function(err){
			next(err);
		});
});