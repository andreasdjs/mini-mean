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


	$scope.hello = function () {
		console.log("tittut");
	}

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




