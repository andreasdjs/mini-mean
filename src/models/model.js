'use strict';

var mongoose = require('mongoose');

var animalSchema = new mongoose.Schema({
	name: String,
	color: String,
	fed: Boolean
});

var model = mongoose.model('Animal', animalSchema);

module.exports = model;