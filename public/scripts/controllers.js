'use strict';


//app.controller('myController', function($scope, $http, $compile) {

app.controller('myController', function($scope, dataService) {
	
	  dataService.getSkills(function(response) {
	    $scope.skills =  response.data.skills;
	  });


	$scope.hello = function () {
		console.log("tittut");
	}

	$scope.cars = [
	 	{
	 		"license" : "ABC123",
	 		"brand" : "Volvo",
	 		"model" : "Z5000",
	 		"year" :  "2050",
			"visibleBrandInput" : false,
			"visibleYearInput" : false,
			"visibleModelInput" : false,
	 		"visibleLicenseInput" : false
	 	},
	 	{
	 		"license" : "XYZ777",
	 		"brand" : "Volvo",
	 		"model" : "Z5000",
	 		"year" :  "2050",
			"visibleBrandInput" : false,
			"visibleYearInput" : false,
			"visibleModelInput" : false,
	 		"visibleLicenseInput" : false
	 	},

	 	{
	 		"license" : "TNY666",
	 		"brand" : "Volvo",
	 		"model" : "Z5000",
	 		"year" :  "2050",
			"visibleBrandInput" : false,
			"visibleYearInput" : false,
			"visibleModelInput" : false,
	 		"visibleLicenseInput" : false
	 	},
	 	{
	 		"license" : "GPS111",
	 		"brand" : "Volvo",
	 		"model" : "Z5000",
	 		"year" :  "2050",
			"visibleBrandInput" : false,
			"visibleYearInput" : false,
			"visibleModelInput" : false,
	 		"visibleLicenseInput" : false
	 	},
	 ];

	 $scope.save = function (car, index) {
	 	console.log("Save triggered!");
	 	console.log(car.brand);
	 	console.log(car.model);
	 	console.log(car.year);
	 	console.log(car.license);
	 	console.log(index);
//	 	$scope.cars[index].brand = car.brand;
	 }

});




