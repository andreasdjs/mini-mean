'use strict';

var mongoose = require('mongoose');
require('../database');

var userSchema = new mongoose.Schema({
	name: String,
	skills: []
}, { versionKey: false }); 

/* Model name 'Skill' matches collection named 'skills' */
var model = mongoose.model('Skill', userSchema);

module.exports.model = model;