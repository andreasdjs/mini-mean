'use strict';

/*************************************/
/** Functions
/*************************************/

/* 
** Current profile mock object
*/

/*
var thisIsMe = {
	"user" : "user200",
	"firstname" : "John",
	"lastname" : "Doe",
	"skills" : [
		"JavaScript",
		"Node.js",
		"AngularJS",
		"MongoDB",
		"User Experience",
		"Web Design",
		"User Interface Design",
		"Photoshop",
		"Mean Stack",
		"Git",
		"SASS",
		"Gulp.js"
	],
	"location" : "Göteborg"
}
*/

/* Placeholders for separated functions. */

function findMatches (obj) {
	return obj;
}

function firstNresult (n, obj) {
	return obj.slice(0, n);
}

/* 
** Get top ten user matchdes based on skills. 
*/


function getTopTenMatches (user, skills) {

	console.log("Current user: " + user);

	/* Get current user */
	var getCurrentUser = skills.filter(function(obj) {
  		return obj.user === user;
	});

	var thisIsMe = getCurrentUser[0]; 

	console.log("Skills length: ");
	console.log(thisIsMe.skills.length);

	// insert filter to eliminate current user from array

	skills.forEach(function (el) {

		var counter = 0;
		var numberOfMatches = 0;
		var numberOfSkills = 0;
		var matchingSkills = [];
		var locationScore = 0;
		var totalScore = 0;

		el.skills.forEach(function (element) {

			numberOfSkills = numberOfSkills+1;

			thisIsMe.skills.forEach(function (meSkills) {

				if (element === meSkills) {
					numberOfMatches = numberOfMatches+1;
					matchingSkills.push(element);
				}

			});

		});

		if (el.location === thisIsMe.location) {

			locationScore = locationScore+1;

			if (thisIsMe.skills.length > 10) {
				// If user has many skills, location score grows.
				locationScore = locationScore+1;
			}

		}

		el.matches = numberOfMatches;
		el.numberOfSkills = numberOfSkills;
		el.matchingSkills = matchingSkills;
		el.total = numberOfMatches + locationScore;

		if (el.user === thisIsMe.user) {
			el.total = -1; // quick fix, filter this user out for real later.
		}

	});

	function sortMatches (profile) {

		profile.sort(function(a, b){
			 return a.total-b.total;
		});
		profile.reverse(); 

		return profile;
	}	


	sortMatches(skills);

	var newSkills = { skills : skills.slice(0,20)};

	return newSkills;

}


/*************************************/
/** Exports 
/*************************************/

module.exports.getTopTenMatches = getTopTenMatches;




