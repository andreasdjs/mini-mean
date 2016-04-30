'use strict';

var express = require('express');
var users  = require('../models/users');
var router = express.Router();
var modules = require('../modules/modules');


/* Get skill object for current user */
/*
router.get('/currentSkills', function(req, res) {
	console.log("Requesting skills.");

  users.model.find({}, function(err, skills) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }

    res.json({ skills: skills });

  }); 

});
*/

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

	// To be able to modify the object lean().exec() is used  //

	users.model.find().lean().exec({}, function(err, skills) {
	    if (err) {
	      return res.status(500).json({ message: err.message });
		}

		var currentUser = "user200";

	    res.json(modules.getTopTenMatches(currentUser, skills));

	}); 

});


// update one animal
router.put('/updateSkills/:user', function(req, res) {

	console.log("Routing triggered.");

	var user = req.params.user;
	var thisIsNewMe = req.body;
	console.log(thisIsNewMe);
	console.log(user);

// ID
// 5724c1b84011bb7d4787e3d6
	var id = "5724c1b84011bb7d4787e3d6";


  users.model.findByIdAndUpdate(id, thisIsNewMe, {new: true}, function(err, todo) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'skills': thisIsNewMe, message: 'User profile updated' });
  });



/*
	
  var id = req.params.id;
  var animal = req.body;
 */

 /*
  if (animal && animal._id !== id) {
    return res.status(500).json({ err: "Ids don't match!" });
  }
*/

/*
  Animal.findByIdAndUpdate(id, animal, {new: true}, function(err, todo) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'animal': animal, message: 'Animal updated' });
  });
*/

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