'use strict';


//app.controller('myController', function($scope, $http, $compile) {

app.controller('myController', function($scope, dataService) {

	$scope.hovering = false; // detecting hover for delete class

	dataService.getCurrentUser(function(response) {
		$scope.me =  response.data;
//		console.log("trigger get currentUser");
//		console.log($scope.me);
	});

	dataService.getSkills(function(response) {
		$scope.skills =  response.data.skills;
	});

	dataService.getSkillsTopMatches(function(response) {
		$scope.topSkills =  response.data.skills;
	});

	$scope.removeSkill = function (index) {
//		console.log("Remove skill triggered.");
//		console.log(index);
//		console.log($scope.me.skills[index]);
		$scope.me.skills.splice(index, 1);
		$scope.saveSkills();
	}

	$scope.addSkill = function (newSkill) {
//		console.log("Add skill triggered.");
		if (newSkill) {
			$scope.me.skills.push(newSkill);
			$scope.saveSkills();
			$scope.input.newSkill = ""; // clear input field
		}
	}

	$scope.saveSkills = function() {
//		console.log("Save skills triggered.");
//		console.log($scope.me);
	    dataService.updateSkills($scope.me);
	}

	$scope.addFriend = function() {
		console.log("Oh, a new friend!");
	}

/*
	$scope.me = {
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

});




