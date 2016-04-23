'use strict';

var mongoose = require('mongoose');
require('../database');

var animalSchema = new mongoose.Schema({
	name: String,
	color: String,
	weight: String
}, { versionKey: false }); 

var animal = mongoose.model('Animal', animalSchema);

module.exports.animal = animal;