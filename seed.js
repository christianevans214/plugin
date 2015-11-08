var mongoose = require('mongoose');
var chalk = require('chalk');
var Promise = require('bluebird');
var connectToDb = require('./db/index');
var User = Promise.promisifyAll(mongoose.model('User'));
var Playlist = Promise.promisifyAll(mongoose.model('Playlist'));
var Song = Promise.promisifyAll(mongoose.model('Song'));

var seedUsers = function() {

    var users = [{
        firstName: 'test',
        lastName: 'test',
        email: 'testing@fsa.com',
        password: 'password',
    }, {
        firstName: 'Barack',
        lastName: 'Obama',
        email: 'obama@gmail.com',
        password: 'potus',
    }, {
        firstName: 'Led',
        lastName: 'Zeppelin', 
        email: 'zep@gmail.com',
        password: 'Led',
    }, {
        firstName: 'Taylor',
        lastName: 'Swift',        
        email: 'taylor@gmail.com',
        password: 'Swift',
    }];


    return User.createAsync(users);

};

connectToDb.then(function(){
	mongoose.connection.db.dropDatabase(function() {
		seedUsers()
			.then(function(arrUser){
				console.log(chalk.green('Users Seeded!'));
				process.kill(0);
			})
			.then(null, function(err){
				console.log(chalk.red("User Seeding failed!"))
				process.kill(0);
			})
	})
})