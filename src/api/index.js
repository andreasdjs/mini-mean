'use strict';

var express = require('express');
//var model  = require('../models/model');
var users  = require('../models/users');
var router = express.Router();
var modules = require('../modules/modules');


/* Get all users and their skills */

router.get('/skills', function(req, res) {
	console.log("Requesting skills.");

  users.model.find({}, function(err, skills) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.json({ skills: skills });

  }); 

});


/* Get all top ten matching users based on skills */

router.get('/skillsTopMatches', function(req, res) {
	console.log("Requesting top 10 matches.");
	// Return top 10 matches
    res.json(modules.getTopTenMatches());

});


/* Dump users & skills in console.log */

/*
users.model.find(function(err, users){
	if(err) {
		return console.error('Error: ' + err);
	} else {
		console.log("-------------------------");
			console.log("trigger!");

		users.forEach(function(user){
			console.log(user.firstname + " " + user.lastname);
			console.log("-------------------------");

			user.skills.forEach(function(skill){
				console.log(skill);
			});
			console.log("-------------------------");
		});
	}
});
*/


/* READ */
/*
model.animal.find(function(err, animals){
	if(err) {
		return console.error('Error: ' + err);
	} else {
		console.log("-------------------------");
		animals.forEach(function(animal){
			console.log(animal.name);
		});
	}
});
*/

/* READ : FIND ONE */
/*
model.animal.findOne({ name : "Marten" }, function(err, animal){
	if(err) {
		return console.error('Error: ' + err);
	} else {
		console.log("-------------------------");
		console.log('Name: '+ animal.name);
		console.log('Weight: '+ animal.weight);
		console.log('Weight: '+ animal.color);
	}
});
*/
/* CREATE NEW OBEJCT */
/*
var newAnimal = new model.animal({
	'name' : 'Hund',
	'weight' : 2,
	'color' : 'black'
});
*/
/* CREATE */

/*
model.animal.create(newAnimal, function(err, newDoc){
	if(err) {
		return console.error('Error: ' + err);
	} else {
		console.log('New animal added:');
		console.log('Name: ' + newDoc.name);
		console.log('Weight: ' + newDoc.weight);
		console.log('Color: ' + newDoc.color);
//		mongoose.connection.close();
	}
});
*/

/* UPDATE */
/*
model.animal.findOneAndUpdate({ name: "Marten" }, { $set : { weight: 200 }}, function(err, doc){
	if(err) {
		return console.error('Error: ' + err);
	} else {
		console.log("-------------------------");
	}
});
*/

/* READ ... again */
/*
model.animal.find(function(err, animals){
	if(err) {
		return console.error('Error: ' + err);
	} else {
		console.log("-------------------------");
		animals.forEach(function(animal){
			console.log(animal.name);
		});
	}
});
*/


/*
router.get...

router.post...

router.put...

router.delete...
*/

module.exports = router;