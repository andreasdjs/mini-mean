'use strict';

var mongoose = require('mongoose');
require('../database');

var userSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
//	name: String,
	location: String,
	skills: []
}, { versionKey: false }); 

/* Model name 'Skill' matches collection named 'skills' */
var model = mongoose.model('Skill', userSchema);

module.exports.model = model;