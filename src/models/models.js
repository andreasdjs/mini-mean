'use strict';

var mongoose = require('mongoose');
require('../database');

/*****************************************************/
/** Users and their skills
/*****************************************************/

var userSchema = new mongoose.Schema({
	firstname: String,
	lastname: String,
	location: String,
	skills: []
}, { versionKey: false }); 

/* Model name 'Skill' matches collection named 'skills' */
var model = mongoose.model('Skill', userSchema);

/*****************************************************/
/** Available skills 
/*****************************************************/

var availableSkillsSchema = new mongoose.Schema({
	name: String
/*	description: String,
	status: String */
}, { versionKey: false }); 

var availabSkillsModel = mongoose.model('Availableskill', availableSkillsSchema);


/*****************************************************/
/** Exports 
/*****************************************************/

module.exports.availabSkillsModel = availabSkillsModel;
module.exports.model = model;


