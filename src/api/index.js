'use strict';

var mongoose = require('mongoose'); 
var express = require('express');

var model  = require('../models/model');

/* READ */

model.animal.find(function(err, animals){
	if(err) {
		return console.error('Error: ' + err);
	} else {
		console.log("-------------------------");
//		console.log(animals);
		animals.forEach(function(animal){
			console.log(animal.name);
		});
//		mongoose.connection.close();  
	}
});

/* READ : FIND ONE */

model.animal.findOne({ name : "Marten" }, function(err, animal){
	if(err) {
		return console.error('Error: ' + err);
	} else {
		console.log("-------------------------");
		console.log('Name: '+ animal.name);
		console.log('Weight: '+ animal.weight);
		console.log('Weight: '+ animal.color);
//		mongoose.connection.close();
	}
});

/* CREATE NEW OBEJCT */

var newAnimal = new model.animal({
	'name' : 'Hund',
	'weight' : 2,
	'color' : 'black'
});

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

model.animal.findOneAndUpdate({ name: "Marten" }, { $set : { weight: 200 }}, function(err, doc){
	if(err) {
		return console.error('Error: ' + err);
	} else {
		console.log("-------------------------");
		console.log('Updated! Woohoo!!?');
//		mongoose.connection.close();
	}
});


/* READ ... again */

model.animal.find(function(err, animals){
	if(err) {
		return console.error('Error: ' + err);
	} else {
		console.log("-------------------------");
//		console.log(animals);
		animals.forEach(function(animal){
			console.log(animal.name);
		});
//		mongoose.connection.close();  
	}
});

var router = express.Router();

/*
router.get...

router.post...

router.put...

router.delete...
*/

module.exports = router;