'use strict';

app.controller('myController', function($scope, dataService) {

	$scope.hovering = false; // detecting hover for delete class

	dataService.getCurrentUser(function(response) {
		$scope.me =  response.data;
	});

	dataService.getSkillDetails(function(response) {
		$scope.availableSkills = response.data;

		var skillDetails = response.data.availableSkills.filter(function(obj) {
	  		return obj.name === "JavaScript";
		});

		var skillDetails = skillDetails[0];
		console.log(skillDetails.description);

	});

	dataService.getSkills(function(response) {
		$scope.skills =  response.data.skills;
	});

	dataService.getSkillsTopMatches(function(response) {
		$scope.topSkills =  response.data.skills;
	});

	$scope.removeSkill = function (index) {
//		console.log($scope.me.skills[index]);
		$scope.me.skills.splice(index, 1);
		$scope.saveSkills();
	}

	$scope.addSkill = function (newSkill) {
		if (newSkill) {
			$scope.me.skills.push(newSkill);
			$scope.saveSkills();
			$scope.input.newSkill = ""; // clear input field
			// call skill database function 
		}
	}

	$scope.saveSkills = function() {
	    dataService.updateSkills($scope.me);

		// Reload matches
		dataService.getSkillsTopMatches(function(response) {
			$scope.topSkills =  response.data.skills;
		});

	}

	$scope.addFriend = function(index) {
		console.log("Oh, a new friend!");
		console.log($scope.topSkills[index].user)
		console.log($scope.topSkills[index].firstname)
		console.log($scope.topSkills[index].lastname)
	}

	$scope.hello = function() {
		console.log("Hello dear!");
	}

	$scope.showDetails = function(index) {

		var skillDetails = $scope.availableSkills.availableSkills.filter(function(obj) {
	  		return obj.name === $scope.me.skills[index]; 
		});

		if (skillDetails[0].description !== "") {	
			var skillDetails = skillDetails[0];
			console.log(skillDetails.description);
		}

	}


/******************************************************/
/* The C in CRUD. 
/* Not i use but required for the project..
/******************************************************/

	function triggerNewSkill () {
		var add_skill = {
			"name" : "New skill",
			"description" : "",
			"status" : "New"
		}
	    dataService.addNewSkill(add_skill);
	}

//	triggerNewSkill(); 


/******************************************************/
/* The D in CRUD. 
/* Not i use but required for the project..
/******************************************************/


	function triggerDeleteSkill () {

		var remove_skill = {
			"_id" : "572709dce8a77300d46499c3",
			"name" : "New skill",
			"description" : "",
			"status" : "New"
		}

	    dataService.removeSkill(remove_skill);
	}

 	triggerDeleteSkill();


});




