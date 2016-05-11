'use strict';

var express = require('express');
//var users  = require('../models/users');
var users  = require('../models/models');
var router = express.Router();
var modules = require('../modules/modules');


/*****************************************************/
/** Get available skills
/*****************************************************/

router.get('/availableSkills', function(req, res) {
	console.log("Requesting available skills.");
	users.availabSkillsModel.find({}, function(err, data) {
		if (err) {
			return res.status(500).json({ message: err.message });
		}
		res.json({ availableSkills: data });
	}); 
});

/*****************************************************/
/** Find skill with regex
/*****************************************************/

// http://snipref.com/mongoose-js/mongoose-js-find-with-regex/

/*

var name = 'Peter';
model.findOne({name: new RegExp('^'+name+'$', "i")}, function(err, doc) {
  //Do your action here..
});

*/


/*****************************************************/
/** Get current user
/*****************************************************/

router.get('/currentUser', function(req, res) {
	console.log("Requesting current user.");
	var currentUser = "user200"; // placeholder for user logged in
	users.model.find({ user : currentUser }, function(err, skills) {
	    if (err) {
	      return res.status(500).json({ message: err.message });
	    }
	    var newMe = skills[0];
   		res.json(newMe);
	}); 
});

/*****************************************************/
/** Get all users and their skills 
/*****************************************************/

router.get('/skills', function(req, res) {
	console.log("Requesting skills.");
	users.model.find({}, function(err, skills) {
		if (err) {
	    	return res.status(500).json({ message: err.message });
		}
	    res.json({ skills: skills });
	}); 
});

/*****************************************************/
/** Get a selection of matching users
/*****************************************************/

router.get('/skillsTopMatches', function(req, res) {
	console.log("Requesting top matches.");

	// To be able to modify the object lean().exec() is used  //
	users.model.find().lean().exec({}, function(err, skills) {
		if (err) {
	    	return res.status(500).json({ message: err.message });
		}
		var currentUser = "user200"; // placeholder for user logged in
	    res.json(modules.getTopTenMatches(currentUser, skills));
	}); 
});


/*****************************************************/
/** Update skills of current user
/*****************************************************/

router.put('/updateSkills/:user', function(req, res) {

	console.log("Routing triggered.");

	var user = req.params.user;
	var thisIsNewMe = req.body;
	var id = thisIsNewMe._id;

	users.model.findByIdAndUpdate(id, thisIsNewMe, {new: true}, function(err, todo) {
		if (err) {
			return res.status(500).json({ err: err.message });
		}
		res.json({ 'skills': thisIsNewMe, message: 'User profile updated' });
	});

});

/*****************************************************/
/** Create new skill in available skills 
/*****************************************************/


router.post('/addNewSkill', function(req, res) {
	console.log("Requesting add new skill.");
	var new_skill = req.body;

	console.log("Skill passed from function: ");

	console.log(new_skill);

	users.availabSkillsModel.create(new_skill, function(err, todo) {
		if (err) {
			return res.status(500).json({ err: err.message });
		}
	
		res.json({ 'avilableskills': new_skill, message: 'New skill added for approval' });

	});


});

/*****************************************************/
/** Delete skill by id from available skills 
/*****************************************************/

router.delete('/removeSkill/:id', function(req, res) {
  var id = req.params.id;
//  console.log(id);

  users.availabSkillsModel.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Skill deleted' });
  });


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


module.exports = router;