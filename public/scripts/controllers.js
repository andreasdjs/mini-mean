'use strict';


//app.controller('myController', function($scope, $http, $compile) {

app.controller('myController', function($scope, dataService) {

	$scope.hovering = false;

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
		console.log("Add skill triggered.");
		console.log(newSkill);
		$scope.me.skills.push(newSkill);
		$scope.saveSkills();
	}

	$scope.saveSkills = function() {
		console.log("Save skills triggered.");
		console.log($scope.me);

	    dataService.updateSkills($scope.me);

/*
	  dataService.updateSkills(function(response) {
	  	console.log("saveSkills service triggered.");
	//    $scope.topSkills =  response.data.skills;
	  });
*/
	}


	$scope.hello = function () {
		console.log("tittut");
	}

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

/*
	$scope.mySkills = [
		{
			"skills" : [ 
				"JavaScript",
				"Node.js",
				"Gulp",
				"SASS",
				"Git"
			]
		}
	];
*/	

/*
	 $scope.save = function (car, index) {
	 	console.log("Save triggered!");
	 	console.log(car.brand);
	 	console.log(car.model);
	 	console.log(car.year);
	 	console.log(car.license);
	 	console.log(index);
	 }
*/

});




