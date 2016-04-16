'use strict';

var mongoose = require('mongoose'); 
var express = require('express');

var model  = require('../models/model');

model.animal.find(function(err, animals){
	if(err) {
		return console.error('Error: ' + err);
	} else {
		console.log("trigger yay!");
//		console.log(animals);
		animals.forEach(function(animal){
			console.log(animal.name);
		});
		mongoose.connection.close();
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