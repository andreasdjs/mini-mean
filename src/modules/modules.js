'use strict';

/*************************************/
/** Functions
/*************************************/

/* 
** Get top ten user matchdes based on skills. 
*/

// Dummy object

var profiles = {
skills: 	
	[
		{
			"firstname" : "Anna",
			"lastname" : "Andersson",
			"skills" : ["Node.js", "JavaScript", "Photoshop"],
			"matchingSkills" : ["Node.js", "JavaScript"],
			"matches" : 1
		},
		{
			"firstname" : "Anders",
			"lastname" : "Andersson",
			"skills" : ["Node.js", "JavaScript", "Photoshop"],
			"matchingSkills" : ["Node.js", "JavaScript"],
			"matches" : 5
		},
		{
			"firstname" : "Agnes",
			"lastname" : "Andersson",
			"skills" : ["Node.js", "JavaScript", "Photoshop"],
			"matchingSkills" : ["Node.js", "JavaScript"],
			"matches" : 3
		},
		{
			"firstname" : "Alicia",
			"lastname" : "Andersson",
			"skills" : ["Node.js", "JavaScript", "Photoshop"],
			"matchingSkills" : ["Node.js", "JavaScript"],
			"matches" : 2
		},
		{
			"firstname" : "Anton",
			"lastname" : "Andersson",
			"skills" : ["Node.js", "JavaScript", "Photoshop"],
			"matchingSkills" : ["Node.js", "JavaScript"],
			"matches" : 4
		},
		{
			"firstname" : "Bengt",
			"lastname" : "Andersson",
			"skills" : ["Node.js", "JavaScript", "Photoshop"],
			"matchingSkills" : ["Node.js", "JavaScript"],
			"matches" : 6
		},
		{
			"firstname" : "Alicia",
			"lastname" : "Andersson",
			"skills" : ["Node.js", "JavaScript", "Photoshop"],
			"matchingSkills" : ["Node.js", "JavaScript"],
			"matches" : 8
		},		{
			"firstname" : "Alicia",
			"lastname" : "Andersson",
			"skills" : ["Node.js", "JavaScript", "Photoshop"],
			"matchingSkills" : ["Node.js", "JavaScript"],			
			"matches" : 12
		},		{
			"firstname" : "Alicia",
			"lastname" : "Andersson",
			"skills" : ["Node.js", "JavaScript", "Photoshop"],
			"matchingSkills" : ["Node.js", "JavaScript"],
			"matches" : 0
		},		{
			"firstname" : "Alicia",
			"lastname" : "Andersson",
			"skills" : ["Node.js", "JavaScript", "Photoshop"],
			"matchingSkills" : ["Node.js", "JavaScript"],
			"matches" : 0
		},		{
			"firstname" : "Alicia",
			"lastname" : "Andersson",
			"skills" : ["Node.js", "JavaScript", "Photoshop"],
			"matchingSkills" : ["Node.js", "JavaScript"],
			"matches" : 3
		}
	]
}

function getTopTenMatches (user, data) {

/*
	console.log("-------------------------");
	console.log(user);
	console.log("-------------------------");
	console.log(data);
	console.log("-------------------------");
*/


/*
	var obj = { 
		[
			{	
				"test" : "test"
			}
		]
	};
*/

	return profiles;
}

function hello() {
	console.log("Hello my friend!");
}


/*************************************/
/** Exports 
/*************************************/

module.exports.getTopTenMatches = getTopTenMatches;

module.exports.hello = hello;



