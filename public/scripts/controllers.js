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
		
//		console.log($scope.availableSkills);

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
	}

	$scope.addFriend = function() {
		console.log("Oh, a new friend!");
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


});




