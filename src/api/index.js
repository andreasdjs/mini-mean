'use strict';

var express = require('express');
//var model  = require('../models/model');
var users  = require('../models/users');

var router = express.Router();

/* READ USERS*/ /* */


// get all animals
/*

router.get('/users', function(req, res) {
  users.find({}, function(err, users) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    console.log("GET triggered");
    res.json({ users: users });
  });
});
*/
// get all animals


router.get('/skills', function(req, res) {
	console.log("trigger");

  users.model.find({}, function(err, skills) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.json({ skills: skills });
  }); 

});

/* Dump users & skills in console.log */

users.model.find(function(err, users){
	if(err) {
		return console.error('Error: ' + err);
	} else {
		console.log("-------------------------");
			console.log("trigger!");

		users.forEach(function(user){
			console.log(user.firstname + " " + user.lastname);
			console.log("-------------------------");
			/* skills */
			user.skills.forEach(function(skill){
				console.log(skill);
			});
			console.log("-------------------------");
		});
//			console.log("Finished!");
	}
});



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